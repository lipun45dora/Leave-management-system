 using Microsoft.AspNetCore.Mvc;
using API.Data;
using API.Entities;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
  // [ApiController]
    //[Route("api/[controller]")]

    public class AdminController :BaseApiController
    {   
        private readonly AdminDataContext _context;
        public AdminController(AdminDataContext context)
        {
            _context = context;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AdminUser>>> GetAdmins()
        {
            return  await _context.Admin.ToListAsync();
          
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<AdminUser>> GetAdmin(int id)
        {
            
        return await _context.Admin.FindAsync(id);
          
        }
    }
} 
    
