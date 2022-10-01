using Microsoft.AspNetCore.Mvc;
using AccountsAPIService.Models;

namespace AccountsAPIService.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        [HttpPost]
        public bool ValidateCredentials([FromBody] Credentials credentials)
        {
            if(credentials.Email.Length>3)
            {
                return true;
            }

            return false;
        }

        [HttpGet]

        public string Index()
        {
            return "1234";
        }
    }
}
