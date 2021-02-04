
function JsonFileSelector({ onFileSelected }) {
    return (
        <input type="file" onChange={e => onFileSelected(e.target.files[0])} />
    );
}

export default JsonFileSelector;