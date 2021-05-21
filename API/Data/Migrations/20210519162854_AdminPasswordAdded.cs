using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class AdminPasswordAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
           migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "Admin",
                type: "BLOB",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "Admin",
                type: "BLOB",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
              migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "Admin");

            migrationBuilder.DropColumn(
                name: "PasswordSalt",
                table: "Admin");
        }
    }
}
