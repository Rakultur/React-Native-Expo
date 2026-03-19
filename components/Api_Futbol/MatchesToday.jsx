import { useEffect, useState } from "react";

const MatchesToday = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const today = new Date().toISOString().split("T")[0];

        const res = await fetch(
          `https://v3.football.api-sports.io/fixtures?date=${today}`,
          {
            headers: {
              "x-apisports-key": "09afc0d75a3062cab010924ce0ccabe4",
            },
          },
        );

        if (!res.ok) throw new Error("Error al obtener datos");

        const data = await res.json();

        setMatches(data.response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p>Cargando partidos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Partidos de hoy</h2>

      {matches.length === 0 && <p>No hay partidos hoy</p>}

      {matches.map((match) => (
        <div key={match.fixture.id} style={{ marginBottom: "10px" }}>
          <strong>
            {match.teams.home.name} vs {match.teams.away.name}
          </strong>
          <div>{new Date(match.fixture.date).toLocaleTimeString()}</div>
          <div>Estado: {match.fixture.status.short}</div>
        </div>
      ))}
    </div>
  );
};

export default MatchesToday;
