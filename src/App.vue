<template>
  <div id="app">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <main>
      <!-- main content for the assessment here -->

      <div class="odds-examples">
        <h2>Understanding Decimal Odds</h2>

        <div class="example" v-for="(example, index) in oddsExamples" :key="index">
          <h3>Example {{ index + 1 }}: {{ example.description }}</h3>
          <p>If you bet £100 on {{ example.team }} at {{ example.odds }} odds:</p>
          <ul>
            <li>Payout = £100 × {{ example.odds }} = £{{ example.payout }}</li>
            <li>Profit = £{{ example.payout }} - £100 = £{{ example.profit }}</li>
            <li>Result: {{ example.result }}</li>
          </ul>
        </div>

        <div class="stats-section">
          <h3>Betting Statistics from Match Data</h3>
          <div class="stats-grid">
            <div class="stat-card">
              <h4>Lowest Odds</h4>
              <p>{{ lowestOdds.team }}: {{ lowestOdds.odds }}</p>
              <p>£100 bet = £{{ lowestOdds.payout }} payout</p>
            </div>
            <div class="stat-card">
              <h4>Highest Odds</h4>
              <p>{{ highestOdds.team }}: {{ highestOdds.odds }}</p>
              <p>£100 bet = £{{ highestOdds.payout }} payout</p>
            </div>
            <div class="stat-card">
              <h4>Average Odds</h4>
              <p>{{ averageOdds.toFixed(2) }}</p>
              <p>£100 bet = £{{ (averageOdds * 100).toFixed(0) }} average payout</p>
            </div>
            <div class="stat-card">
              <h4>Win Rate</h4>
              <p>{{ winRate.toFixed(1) }}%</p>
              <p>{{ wins }} wins out of {{ totalMatches }} matches</p>
            </div>
          </div>
        </div>

        <div class="recent-matches">
          <h3>Recent Match Results</h3>
          <div class="match-list">
            <div v-for="match in recentMatches" :key="match.team + Math.random()" class="match-item">
              <span class="team">{{ match.team }}</span>
              <span class="odds">{{ match.odds }}</span>
              <span class="result" :class="match.result.toLowerCase()">{{ match.result }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { matchData } from './matchData'

export default {
  name: 'App',
  data() {
    return {
      title: 'Moon Technologies',
      matchData: matchData
    }
  },
  computed: {
    oddsExamples() {
      // Find interesting examples from the data
      const examples = []

      // Find a low odds winner (favorite that won)
      const lowOddsWinner = this.matchData.find(match =>
        match.result === 'WIN' && match.odds < 1.5
      )
      if (lowOddsWinner) {
        examples.push({
          description: `Low Odds Winner - ${lowOddsWinner.team}`,
          team: lowOddsWinner.team,
          odds: lowOddsWinner.odds,
          payout: (100 * lowOddsWinner.odds).toFixed(0),
          profit: (100 * lowOddsWinner.odds - 100).toFixed(0),
          result: lowOddsWinner.result
        })
      }

      // Find a medium odds winner
      const mediumOddsWinner = this.matchData.find(match =>
        match.result === 'WIN' && match.odds >= 2.0 && match.odds <= 4.0
      )
      if (mediumOddsWinner) {
        examples.push({
          description: `Medium Odds Winner - ${mediumOddsWinner.team}`,
          team: mediumOddsWinner.team,
          odds: mediumOddsWinner.odds,
          payout: (100 * mediumOddsWinner.odds).toFixed(0),
          profit: (100 * mediumOddsWinner.odds - 100).toFixed(0),
          result: mediumOddsWinner.result
        })
      }

      // Find a high odds winner (underdog that won)
      const highOddsWinner = this.matchData.find(match =>
        match.result === 'WIN' && match.odds > 5.0
      )
      if (highOddsWinner) {
        examples.push({
          description: `High Odds Winner - ${highOddsWinner.team}`,
          team: highOddsWinner.team,
          odds: highOddsWinner.odds,
          payout: (100 * highOddsWinner.odds).toFixed(0),
          profit: (100 * highOddsWinner.odds - 100).toFixed(0),
          result: highOddsWinner.result
        })
      }

      // Find a high odds loser (underdog that lost)
      const highOddsLoser = this.matchData.find(match =>
        match.result === 'LOSS' && match.odds > 8.0
      )
      if (highOddsLoser) {
        examples.push({
          description: `High Odds Loser - ${highOddsLoser.team}`,
          team: highOddsLoser.team,
          odds: highOddsLoser.odds,
          payout: '0',
          profit: '-100',
          result: highOddsLoser.result
        })
      }

      return examples
    },

    lowestOdds() {
      const lowest = this.matchData.reduce((min, match) =>
        match.odds < min.odds ? match : min
      )
      return {
        team: lowest.team,
        odds: lowest.odds,
        payout: (100 * lowest.odds).toFixed(0)
      }
    },

    highestOdds() {
      const highest = this.matchData.reduce((max, match) =>
        match.odds > max.odds ? match : max
      )
      return {
        team: highest.team,
        odds: highest.odds,
        payout: (100 * highest.odds).toFixed(0)
      }
    },

    averageOdds() {
      const total = this.matchData.reduce((sum, match) => sum + match.odds, 0)
      return total / this.matchData.length
    },

    wins() {
      return this.matchData.filter(match => match.result === 'WIN').length
    },

    totalMatches() {
      return this.matchData.length
    },

    winRate() {
      return (this.wins / this.totalMatches) * 100
    },

    recentMatches() {
      // Return the last 10 matches
      return this.matchData.slice(-10).reverse()
    }
  },
  methods: {
    getMatchData() {
      return this.matchData
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}

header {
  margin-bottom: 30px;
}

h1 {
  color: #42b983;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #3aa876;
}

.event-log {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
  margin-top: 20px;
  text-align: left;
}

.event-log h4 {
  margin-top: 0;
  color: #495057;
}

.event-log pre {
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
  font-size: 12px;
}

.odds-examples {
  text-align: left;
}

.example {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.example h3 {
  color: #495057;
  margin-top: 0;
}

.example ul {
  margin-bottom: 0;
}

.example li {
  margin-bottom: 5px;
}

.stats-section {
  margin-top: 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.stat-card {
  background-color: #e3f2fd;
  border: 1px solid #bbdefb;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
}

.stat-card h4 {
  margin-top: 0;
  color: #1976d2;
  font-size: 16px;
}

.stat-card p {
  margin: 5px 0;
  font-weight: bold;
}

.recent-matches {
  margin-top: 30px;
}

.match-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  margin-top: 15px;
}

.match-item {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.team {
  font-weight: bold;
  flex: 1;
}

.odds {
  background-color: #6c757d;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  margin: 0 10px;
}

.result {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  min-width: 50px;
  text-align: center;
}

.result.win {
  background-color: #28a745;
  color: white;
}

.result.loss {
  background-color: #dc3545;
  color: white;
}
</style>