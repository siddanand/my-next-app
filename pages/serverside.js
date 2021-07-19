function ServerSide({ data }) {
  // Render data...
  console.log(data);
  return (
    <div>
      <h1>THIS PAGE IS GENERATED SERVER SIDE</h1>
      <h2>IT WILL BE RENDERED ON EVERY PAGE RELOAD </h2>
      <h3>MY GITHUB REPOS:</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.full_name}</li>
        ))}
      </ul>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/siddanand/repos`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default ServerSide;
