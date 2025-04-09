using Microsoft.AspNetCore.Mvc;

namespace MaltalistApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CreateListingController : ControllerBase
    {
        // Sample endpoint for creating a listing
        [HttpPost]
        public IActionResult CreateListing([FromBody] CreateListingRequest request)
        {
            if (request == null || string.IsNullOrEmpty(request.Name) || string.IsNullOrEmpty(request.Description))
                return BadRequest("Invalid listing data");

            var newListing = new
            {
                id = 4,  // For simplicity, a static ID
                request.Name,
                request.Description
            };

            return CreatedAtAction(nameof(GetListingById), new { id = newListing.id }, newListing);
        }

        // Sample endpoint to get listing by ID (for response validation)
        [HttpGet("{id}")]
        public IActionResult GetListingById(int id)
        {
            var listing = new { id, name = $"Listing {id}", description = $"Description {id}" };
            return Ok(listing);
        }
    }

    public class CreateListingRequest
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
