

export const Getdatos = async () => {
  const test = await fetch(
    'https://wp.growproexperience.com/wp-json/wp/v2/social'
  ).then((response) => response.json());
    console.log(test);
    return test;
};

