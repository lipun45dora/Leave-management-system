using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

/*namespace API.Data
{
    [DbContext(typeof(AdminDataContext))]
    partial class DataContextModelSnapshotAdmin : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0-preview.3.21201.2");

          
                modelBuilder.Entity("API.Entities.AdminUser", c =>
                {
                    c.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    c.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    c.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    c.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    c.HasKey("Id");

                    c.ToTable("Admin");
                });
#pragma warning restore 612, 618
        }
}
}*/