import Channel from "../../../src/behavioral/mediator/Channel";
import Participant from "../../../src/behavioral/mediator/Participant";

test("Deve criar um chat entre participantes", function () {
	const participanta = new Participant("A");
	const participantb = new Participant("B");
	const participantc = new Participant("C");
	participantb.receive(participanta, "Hello");
	participantc.receive(participanta, "Hello");
	expect(participantb.messages[0]).toBe("Participante B recebeu a mensagem Hello do participante A");
	expect(participantc.messages[0]).toBe("Participante C recebeu a mensagem Hello do participante A");
});

test("Deve criar uma sala de chat entre participantes", function () {
	const participanta = new Participant("A");
	const participantb = new Participant("B");
	const participantc = new Participant("C");
	const channel = new Channel();
	channel.register(participanta);
	channel.register(participantb);
	channel.register(participantc);
	channel.broadcast(participanta, "Hello");
	expect(participantb.messages[0]).toBe("Participante B recebeu a mensagem Hello do participante A");
	expect(participantc.messages[0]).toBe("Participante C recebeu a mensagem Hello do participante A");
});

test("Deve mandar uma mensagem de um participante para outro", function () {
	const participanta = new Participant("A");
	const participantb = new Participant("B");
	const participantc = new Participant("C");
	const channel = new Channel();
	channel.register(participanta);
	channel.register(participantb);
	channel.register(participantc);
	channel.message(participanta, participantb, "Hello");
	expect(participantb.messages[0]).toBe("Participante B recebeu a mensagem Hello do participante A");
});
