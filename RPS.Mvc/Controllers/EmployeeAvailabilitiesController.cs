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
    public class EmployeeAvailabilitiesController : Controller
    {
        private RpsEntities db = new RpsEntities();

        // GET: EmployeeAvailabilities
        public async Task<ActionResult> Index()
        {
            var employeeAvailabilities = db.EmployeeAvailabilities.Include(e => e.Employee);
            return View(await employeeAvailabilities.ToListAsync());
        }

        // GET: EmployeeAvailabilities/Details/5
        public async Task<ActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EmployeeAvailability employeeAvailability = await db.EmployeeAvailabilities.FindAsync(id);
            if (employeeAvailability == null)
            {
                return HttpNotFound();
            }
            return View(employeeAvailability);
        }

        // GET: EmployeeAvailabilities/Create
        public ActionResult Create()
        {
            ViewBag.EmployeeId = new SelectList(db.Employees, "Id", "Name");
            return View();
        }

        // POST: EmployeeAvailabilities/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "EmployeeId,Week")] EmployeeAvailability employeeAvailability)
        {
            if (ModelState.IsValid)
            {
                employeeAvailability.EmployeeId = Guid.NewGuid();
                db.EmployeeAvailabilities.Add(employeeAvailability);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.EmployeeId = new SelectList(db.Employees, "Id", "Name", employeeAvailability.EmployeeId);
            return View(employeeAvailability);
        }

        // GET: EmployeeAvailabilities/Edit/5
        public async Task<ActionResult> Edit(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EmployeeAvailability employeeAvailability = await db.EmployeeAvailabilities.FindAsync(id);
            if (employeeAvailability == null)
            {
                return HttpNotFound();
            }
            ViewBag.EmployeeId = new SelectList(db.Employees, "Id", "Name", employeeAvailability.EmployeeId);
            return View(employeeAvailability);
        }

        // POST: EmployeeAvailabilities/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "EmployeeId,Week")] EmployeeAvailability employeeAvailability)
        {
            if (ModelState.IsValid)
            {
                db.Entry(employeeAvailability).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.EmployeeId = new SelectList(db.Employees, "Id", "Name", employeeAvailability.EmployeeId);
            return View(employeeAvailability);
        }

        // GET: EmployeeAvailabilities/Delete/5
        public async Task<ActionResult> Delete(Guid? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            EmployeeAvailability employeeAvailability = await db.EmployeeAvailabilities.FindAsync(id);
            if (employeeAvailability == null)
            {
                return HttpNotFound();
            }
            return View(employeeAvailability);
        }

        // POST: EmployeeAvailabilities/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(Guid id)
        {
            EmployeeAvailability employeeAvailability = await db.EmployeeAvailabilities.FindAsync(id);
            db.EmployeeAvailabilities.Remove(employeeAvailability);
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
