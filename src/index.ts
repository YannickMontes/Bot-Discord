import { Client, GatewayIntentBits, Partials } from 'discord.js';

const client = new Client({ 
	partials: [
		Partials.Message, 
		Partials.Channel, 
		Partials.Reaction,
	], 
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.MessageContent
	] 
});

if(!process.env.DISCORD_TOKEN)
	console.log("Please provide a discord app token in your .env file.");
else
	client.login(process.env.DISCORD_TOKEN);

export default client;