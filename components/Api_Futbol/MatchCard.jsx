import { Image, StyleSheet, Text, View } from "react-native";

const MatchCard = ({ match, theme }) => {
  const styles = getStyles(theme);
  const statusColor = getStatusColor(match.fixture.status.short, theme);

  return (
    <View style={styles.card}>
      {/* Liga */}
      <Text style={styles.league}>{match.league.name}</Text>

      {/* Equipos */}
      <View style={styles.row}>
        {/* Home */}
        <View style={styles.teamContainer}>
          <Image source={{ uri: match.teams.home.logo }} style={styles.logo} />
          <Text style={styles.team} numberOfLines={1}>
            {match.teams.home.name}
          </Text>
        </View>

        <Text style={styles.vs}>vs</Text>

        {/* Away */}
        <View style={styles.teamContainer}>
          <Image source={{ uri: match.teams.away.logo }} style={styles.logo} />
          <Text style={styles.team} numberOfLines={1}>
            {match.teams.away.name}
          </Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.time}>
          {new Date(match.fixture.date).toLocaleTimeString()}
        </Text>

        <Text style={[styles.status, { color: statusColor }]}>
          {match.fixture.status.short}
        </Text>
      </View>
    </View>
  );
};

const getStatusColor = (status, theme) => {
  if (status === "FT") return theme.colors.gray500;
  if (status === "LIVE" || status === "1H" || status === "2H")
    return theme.colors.green;
  return theme.colors.yellow;
};

const getStyles = (theme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.card,
      padding: theme.components.card.padding,
      borderRadius: theme.components.card.borderRadius,
      marginBottom: theme.spacingValues.sm,

      borderWidth: theme.borders.width.thin,
      borderColor: theme.colors.border,

      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 6,
      elevation: 2,
    },

    league: {
      color: theme.colors.textSecondary,
      fontSize: theme.typography.fontSize.sm,
      marginBottom: theme.spacingValues.xs,
    },

    row: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: theme.spacingValues.sm,
    },

    teamContainer: {
      flex: 1,
      alignItems: "center",
      gap: 4,
    },

    logo: {
      width: 28,
      height: 28,
      resizeMode: "contain",
    },

    team: {
      color: theme.colors.text,
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.medium,
      textAlign: "center",
    },

    vs: {
      marginHorizontal: theme.spacingValues.sm,
      color: theme.colors.textMuted,
    },

    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },

    time: {
      color: theme.colors.primary,
      fontSize: theme.typography.fontSize.sm,
    },

    status: {
      fontSize: theme.typography.fontSize.sm,
      fontWeight: theme.typography.fontWeight.bold,
    },
  });

export default MatchCard;
