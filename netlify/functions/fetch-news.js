exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=fashion&language=en&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );
    
    const data = await response.json();
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching news' })
    };
  }
}; 