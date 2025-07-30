import "./style.css"

function showHero(heroName: string, heroPower: string, heroEnemy: string): void {
  const nameOutput: string = "Mein Lieblingsheld aus Marvel ist: " + heroName + ". "
  const powerOutput: string = "Seine Fähigkeit ist: " + heroPower + ". "
  const enemyOutput: string = "Sein größter Gegner ist: " + heroEnemy + "."

  console.log(nameOutput + powerOutput + enemyOutput)
}

showHero(
  "Spider Man",
  'Er hat die Stärke, Geschwindigkeit, Beweglichkeit, Ausdauer und Reflexe einer Spinne und den sog. "Spinnensinn", der ihn vor Gefahren warnt. Außerdem kann er aus den Handgelenken Spinnweben verschießen',
  "Green Goblin"
)
