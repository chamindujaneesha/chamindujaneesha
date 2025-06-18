using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize(Roles="adviser")]
    public class AuditController : ControllerBase
    {
        private readonly AuditService _audit;
        public AuditController(AuditService audit)
        {
            _audit = audit;
        }

        [HttpGet]
        public IActionResult GetLogs()
        {
            return Ok(_audit.GetAll());
        }
    }
}
