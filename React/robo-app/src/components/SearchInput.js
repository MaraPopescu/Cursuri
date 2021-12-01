function SearchInput({ handleSearchUser }) {
  return (
    <div>
      <input
        placeholder='Search...'
        type='text'
        onChange={(e) => {
          handleSearchUser(e.target.value);
        }}></input>
    </div>
  );
}

export default SearchInput;
