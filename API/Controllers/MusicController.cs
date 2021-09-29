using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/music")]

    public class MusicController : ControllerBase
    {
        private readonly DataContext _context;

        //Construtor
        public MusicController(DataContext context) => _context = context;

        //POST: api/music/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Music music)
        {
            _context.Musics.Add(music);
            _context.SaveChanges();
            return Created("", music);
        }

        //GET: api/music/listmusics
        [HttpGet]
        [Route("listMusics")]

        public IActionResult List() => Ok(_context.Musics.ToList());

    }

}