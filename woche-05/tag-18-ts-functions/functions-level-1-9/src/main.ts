import "./style.css"

function introducePerson(
  vorname: string,
  nachname: string,
  geburtsort: string,
  alter: number,
  wohnort: string
): string {
  return (
    "Mein Name ist " +
    vorname +
    " " +
    nachname +
    ". Ich bin in " +
    geburtsort +
    " geboren. Ich lerne bei SuperCode. Ich bin " +
    alter.toString() +
    " Jahre alt. Ich wohne in " +
    wohnort +
    "."
  )
}

console.log(introducePerson("Aurora", "Stardust", "New York", 20, "Calestia"))
