using Microsoft.AspNetCore.Mvc;

namespace SSEMessege.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class TimeController : ControllerBase
    {
        [HttpGet("time")]
        public async Task GetTime()
        {
            Response.Headers.Add("Content-Type", "text/event-stream");

            while (true)
            {
                var currentTime = DateTime.Now.ToString("HH:mm:ss");
                await Response.WriteAsync($"data: {currentTime}\n\n");
                await Response.Body.FlushAsync();
                await Task.Delay(1000);

            }
        }
    }
}