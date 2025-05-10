// Using the API key directly since we can't use environment variables in free tier
const NEWS_API_KEY = '24eeee565f1a4e1983a310c56c20fcfb';

exports.handler = async function(event, context) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=fashion&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
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