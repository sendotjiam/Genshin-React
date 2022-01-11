import CharacterCard from "../components/CharacterCard.jsx"

export default function Characters({data}) {
    const characters = data.characters.map(character => {
        return (
            <div className="col col-4 col-md-3 col-lg-2 rounded" key={character.name}>
                <CharacterCard genshinCharacter={character} />
            </div>
        )
    })
    return (
        <div>
            <h5>Characters List</h5>
            <div className="row">
                {characters}
            </div>
        </div>
    )
}