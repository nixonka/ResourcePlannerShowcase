using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ResourcePlannerShowcase.Repository.Model;
using System.Data.Entity;

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
            return db.Teams.ToList();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="teamId"></param>
        /// <returns></returns>
        public Team GetTeamByID(Guid teamId)
        {
            if (teamId == null)
                throw new ArgumentNullException("TeamID cannot be null.");

            return db.Teams.Where(t => t.Id == teamId).FirstOrDefault();
        }

        public void DeleteTeam(Guid teamId)
        {
            db.Teams.Remove(db.Teams.Find(teamId));
            Save();

        }

        public void InserTeam(Team team)
        {
            if (team == null)
                throw new ArgumentNullException("Team cannot be null.");

            db.Teams.Add(team);
            Save();
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

        public void UpdateTeam(Team team)
        {
            if (team == null)
                throw new ArgumentNullException("Team cannot be null.");

            db.Entry(team).State = EntityState.Modified;
            Save();
        }
    }
}
