using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ResourcePlannerShowcase.Repository.Model;

namespace ResourcePlannerShowcase.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private RpsEntities db = new RpsEntities();

        /// <summary>
        /// Getts all employees
        /// </summary>
        /// <returns>list of employees</returns>
        public IEnumerable<Employee> GetEmployees()
        {
            return db.Employees
                .Include("EmployeeAvailabilities")
                .Include("ProjectActivities")
                .Include("Projects")
                .Include("Teams").ToList();
        }

        /// <summary>
        /// Gets employees by teamid
        /// </summary>
        /// <param name="teamID"></param>
        /// <returns>list of employees</returns>
        public IEnumerable<Employee> GetEmployeesByTeam(Guid teamID)
        {
            if (teamID == null)
                throw new ArgumentNullException("TeamID cannot be null.");

            return db.Teams.Where(t => t.Id == teamID).FirstOrDefault().Employees.ToList();
        }

        public void DeleteEmployee(Guid employeeId)
        {
            throw new NotImplementedException();
        }

        public Employee GetEmployeeByID(Guid EmployeeId)
        {
            throw new NotImplementedException();
        }

        public void InsertEmployee(Employee employee)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            try
            {
                db.SaveChanges();
            }
            catch (Exception e)
            {
                throw;
            }

        }

        public void UpdateEmployee(Employee employee)
        {
            throw new NotImplementedException();
        }

        public void InsertProjectActivities()
        {
            foreach (var item in db.Employees.ToList())
            {
                if (item.Id == Guid.Parse("6c840776-3bc2-4c2c-8ba1-08cf4364ad93"))
                {
                    foreach (var project in db.Projects.ToList())
                    {
                        for (int i = 1; i <= 10; i++)
                        {
                            item.ProjectActivities.Add(new ProjectActivity() { EmployeeId = item.Id, ProjectId = project.Id, Week = i, Work = 0 });
                        }
                    }
                    for (int i = 1; i <= 10; i++)
                    {
                        item.EmployeeAvailabilities.Add(new EmployeeAvailability() { EmployeeId = item.Id, Available = 5, Week = i });
                    }
                }
            }
            Save();
        }
    }
}
