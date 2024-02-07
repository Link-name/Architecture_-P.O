class NotificationService {
    constructor(emailService) {
        this.emailService = emailService;
    }

    sendAlert(message, recipient) {
        this.emailService.sendEmail(message, recipient);
    }
}
