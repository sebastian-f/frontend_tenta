﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using FrontendTenta.Models;

namespace FrontendTenta.Controllers
{
    public class PeopleAPIController : ApiController
    {
        private PeopleEntities db = new PeopleEntities();

        // GET: api/People
        public IQueryable<People> GetPeople()
        {
            return db.People;
        }

        // GET: api/People/5
        [ResponseType(typeof(People))]
        public IHttpActionResult GetPeople(int id)
        {
            People people = db.People.Find(id);
            if (people == null)
            {
                return NotFound();
            }

            return Ok(people);
        }

        // PUT: api/People/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPeople(int id, People people)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != people.person_key)
            {
                return BadRequest();
            }

            db.Entry(people).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PeopleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/People
        [ResponseType(typeof(People))]
        public IHttpActionResult PostPeople(People people)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.People.Add(people);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = people.person_key }, people);
        }

        // DELETE: api/People/5
        [ResponseType(typeof(People))]
        public IHttpActionResult DeletePeople(int id)
        {
            People people = db.People.Find(id);
            if (people == null)
            {
                return NotFound();
            }

            db.People.Remove(people);
            db.SaveChanges();

            return Ok(people);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PeopleExists(int id)
        {
            return db.People.Count(e => e.person_key == id) > 0;
        }
    }
}