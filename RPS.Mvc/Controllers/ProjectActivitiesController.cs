using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using ResourcePlannerShowcase.Repository.Model;

namespace RPS.Mvc.Controllers
{
    public class ProjectActivitiesController : Controller
    {
        private RpsEntities db = new RpsEntities();

        // GET: ProjectActivities
        public async Task<ActionResult> Index()
        {
            var projectActivities = db.ProjectActivities.Include(p => p.Employee).Include(p => p.Project);
            return View(await projectActivities.ToListAsync());
        }

        // GET: ProjectActivities/Details/5
        public async Task<ActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProjectActivity projectActivity = await db.ProjectActivities.FindAsync(id);
            if (projectActivity == null)
            {
                return HttpNotFound();
            }
            return View(projectActivity);
        }

        // GET: ProjectActivities/Create
        public ActionResult Create()
        {
            ViewBag.EmployeeId = new SelectList(db.Employees, "Id", "Name");
            ViewBag.ProjectId = new SelectList(db.Projects, "Id", "PrjectName");
            return View();
        }

        // POST: ProjectActivities/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "ProjectId,EmployeeId,Week,Work,WeekUtilization")] ProjectActivity projectActivity)
        {
            if (ModelState.IsValid)
            {
                projectActivity.ProjectId = Guid.NewGuid();
                db.ProjectActivities.Add(projectActivity);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.EmployeeId = new SelectList(db.Employees, "Id", "Name", projectActivity.EmployeeId);
            ViewBag.ProjectId = new SelectList(db.Projects, "Id", "PrjectName", projectActivity.ProjectId);
            return View(projectActivity);
        }

        // GET: ProjectActivities/Edit/5
        public async Task<ActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProjectActivity projectActivity = await db.ProjectActivities.FindAsync(id);
            if (projectActivity == null)
            {
                return HttpNotFound();
            }
            ViewBag.EmployeeId = new SelectList(db.Employees, "Id", "Name", projectActivity.EmployeeId);
            ViewBag.ProjectId = new SelectList(db.Projects, "Id", "PrjectName", projectActivity.ProjectId);
            return View(projectActivity);
        }

        // POST: ProjectActivities/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "ProjectId,EmployeeId,Week,Work,WeekUtilization")] ProjectActivity projectActivity)
        {
            if (ModelState.IsValid)
            {
                db.Entry(projectActivity).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.EmployeeId = new SelectList(db.Employees, "Id", "Name", projectActivity.EmployeeId);
            ViewBag.ProjectId = new SelectList(db.Projects, "Id", "PrjectName", projectActivity.ProjectId);
            return View(projectActivity);
        }

        // GET: ProjectActivities/Delete/5
        public async Task<ActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ProjectActivity projectActivity = await db.ProjectActivities.FindAsync(id);
            if (projectActivity == null)
            {
                return HttpNotFound();
            }
            return View(projectActivity);
        }

        // POST: ProjectActivities/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(Guid id)
        {
            ProjectActivity projectActivity = await db.ProjectActivities.FindAsync(id);
            db.ProjectActivities.Remove(projectActivity);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
