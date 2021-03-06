using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trainer.Data;

namespace Trainer.Controllers
{
    [Produces("application/json")]
    [Route("api/Computers")]
    public class ComputersController : Controller
    {
        private readonly DiagonAlleyContext _context;

        public ComputersController(DiagonAlleyContext context)
        {
            _context = context;
        }

        // GET: api/Computers
        [HttpGet]
        public IEnumerable<Computer> GetComputer()
        {
            return _context.Computer;
        }

        // GET: api/Computers/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetComputer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var computer = await _context.Computer.SingleOrDefaultAsync(m => m.ComputerId == id);

            if (computer == null)
            {
                return NotFound();
            }

            return Ok(computer);
        }

        // PUT: api/Computers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComputer([FromRoute] int id, [FromBody] Computer computer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != computer.ComputerId)
            {
                return BadRequest();
            }

            _context.Entry(computer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComputerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Computers
        [HttpPost]
        public async Task<IActionResult> PostComputer([FromBody] Computer computer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Computer.Add(computer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetComputer", new { id = computer.ComputerId }, computer);
        }

        // DELETE: api/Computers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComputer([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var computer = await _context.Computer.SingleOrDefaultAsync(m => m.ComputerId == id);
            if (computer == null)
            {
                return NotFound();
            }

            _context.Computer.Remove(computer);
            await _context.SaveChangesAsync();

            return Ok(computer);
        }

        private bool ComputerExists(int id)
        {
            return _context.Computer.Any(e => e.ComputerId == id);
        }
    }
}