using Backend.Controllers;
using Microsoft.AspNetCore.Mvc;
using Xunit;

namespace Backend.Tests
{
    public class AuthControllerTests
    {
        [Fact]
        public void Login_ReturnsToken()
        {
            var controller = new AuthController();
            var result = controller.Login(new AuthController.LoginRequest { Username = "u", Role = "client" }) as OkObjectResult;
            Assert.NotNull(result);
            Assert.Contains("token", result!.Value!.ToString());
        }
    }
}
