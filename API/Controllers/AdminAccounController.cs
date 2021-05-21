using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    //[ApiController]
    //  [Route("api/[controller]")]


    public class AdminAccountController : BaseApiController
    {
        private readonly AdminDataContext _context;
        private readonly ITokenService _tokenService;
        public AdminAccountController(AdminDataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;

        }
        [HttpPost("register")]
        public async Task<ActionResult<AdminDto>> Register(AdminRegisterDto adminRegisterDto)
        {
            if (await UserExists(adminRegisterDto.Username)) return BadRequest("Username is taken");

            using var hmac = new HMACSHA512();
            var user = new AdminUser
            {
                UserName = adminRegisterDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(adminRegisterDto.Password)),
                PasswordSalt = hmac.Key

            };

            return new AdminDto
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }

        [HttpPost("login")]
        public async Task<ActionResult<AdminDto>> Login(AdminLoginDto adminloginDto)
        {
            var user = await _context.Admin.SingleOrDefaultAsync(x => x.UserName == adminloginDto.Username);

            if (user == null) return Unauthorized("Invalid username");
            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(adminloginDto.Password));
            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid password");

            }
            return new AdminDto
            {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
            };
        }
        private async Task<bool> UserExists(string username)
        {
            return await _context.Admin.AnyAsync(x => x.UserName == username.ToLower());
        }
    }
}

