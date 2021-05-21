using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AdminDataContext : DbContext
    {
        public AdminDataContext(DbContextOptions <AdminDataContext> options) : base(options)
        {}
        

        //public DbSet<AdminUser> Admin{get; set;}

        //public DbSet<AppUser> Users{get; set;}
        public DbSet<AdminUser> Admin{get; set;}
    }
}