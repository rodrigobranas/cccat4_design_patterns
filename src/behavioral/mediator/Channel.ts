import Participant from "./Participant";

export default class Channel {
	participants: Participant[];

	constructor () {
		this.participants = [];
	}

	register (participant: Participant) {
		this.participants.push(participant);
	}

	broadcast (from: Participant, message: string) {
		for (const to of this.participants) {
			if (from.name === to.name) continue;
			to.receive(from, message);
		}
	}

	message (from: Participant, to: Participant, message: string) {
		to.receive(from, message);
	}
}
