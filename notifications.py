import smtplib
from email.mime.text import MIMEText

def send_notification(message):
    sender_email = "your_email@gmail.com"
    receiver_email = "user_email@gmail.com"
    msg = MIMEText(message)
    msg['Subject'] = 'AI Market Alert'
    msg['From'] = sender_email
    msg['To'] = receiver_email

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(sender_email, 'your_email_password')
        server.sendmail(sender_email, receiver_email, msg.as_string())
