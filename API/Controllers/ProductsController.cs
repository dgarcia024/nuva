using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController(StoreContext context) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await context.Products.ToListAsync();
        }


        [HttpGet("{Id}")]
        public async Task<ActionResult<Product>> GetProduct(int Id)
        {
            var product = await context.Products.FindAsync(Id);
            if(product == null) return NotFound();

            return product;
        }
    }
}
