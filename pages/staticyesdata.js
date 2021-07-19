function StaticYesData({ repos }) {
  console.log(repos);
  return (
    <div>
      <h1>THIS PAGE IS GENERATED STATICALLY WITH DATA</h1>
      <h2>
        IT WILL BE REUSED ONCE BUILD IS RUN AND THE DATA IS FETCHED AT BUILD AND
        WILL REMAIN STATIC AFTER THAT
      </h2>
      <h3>MY GITHUB REPOS:</h3>
      <ul>
        {repos.map((item) => (
          <li key={item.id}>{item.full_name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://api.github.com/users/siddanand/repos");
  const repos = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      repos,
    },
  };
}
export default StaticYesData;
// https://api.github.com/users/siddanand/repos
