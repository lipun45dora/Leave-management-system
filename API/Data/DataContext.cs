using Microsoft.EntityFrameworkCore;
using API.Entities;
namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {}
        

        //public DbSet<AdminUser> Admin{get; set;}

        public DbSet<AppUser> Users{get; set;}
        //public DbSet<AdminUser> Admin{get; set;}
    }
}