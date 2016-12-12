using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ResourcePlannerShowcase.Repository.Model;

namespace ResourcePlannerShowcase.Repository
{
    /// <summary>
    /// 
    /// </summary>
    public class TeamRepository : ITeamRepository
    {
        /// <summary>
        /// This should be instantiate in project where we use TeamRepository and pass as a prameter
        /// It is done like this just to save some time
        /// </summary>
        private RpsEntities db = new RpsEntities();

        /// <summary>
        /// Get all teams
        /// </summary>
        /// <returns>Returns list of teams.</returns>
        public IEnumerable<Team> GetTeams()
        {
            return db.Teams.Include("Employees").ToList();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="teamId"></param>
        /// <returns></returns>
        public Team GetTeamByID(Guid teamId)
        {
            if(teamId == null)
                throw new ArgumentNullException("TeamID cannot be null.");

            return db.Teams.Where(t => t.Id == teamId).FirstOrDefault();
        }

        public void DeleteTeam(Guid teamId)
        {
            throw new NotImplementedException();
        }

        public void InserTeam(Team team)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public void UpdateTeam(Team team)
        {
            throw new NotImplementedException();
        }
    }
}
