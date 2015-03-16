using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FrontendTenta.Controllers
{
    public class PeopleController : Controller
    {
        // GET: People
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddNewPerson()
        {
            return PartialView("AddPerson");
        }

        public ActionResult ShowPeople()
        {
            return PartialView("ShowAllPeople");
        }

        public ActionResult EditPerson()
        {
            return PartialView("EditPerson");
        }

        public ActionResult DeletePerson()
        {
            return PartialView("DeletePerson");
        } 
    }
}