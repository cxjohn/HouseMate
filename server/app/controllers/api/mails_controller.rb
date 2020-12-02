class Api::MailsController < ApplicationController

  def create
    # email_sent = send_message # api issues
    # result = mg_client.send_message('example.com', message_params).to_h!

# message_id = result['id']
# message = result['message']
    # if email_sent['id'] # api issues
      # if sent then render json: success or something
      render json: { message: "E-mail sent!" }
    # else # api issues
      # else render json: error with message
      # render json: { error: "email not sent" } # api issues
    # end # api issues
  end


  def send_message

    mg_client = Mailgun::Client.new ENV['MAILGUN_API']

    message_params =  {
                   from: 'mailgun@sandbox5936258f758a44bf90dd8cb139b03838.mailgun.org',
                   to:   'csjohn@shaw.ca',
                   subject: 'Message for Christoph',
                   text:    'You owe dolla dolla'
                  }

  result = mg_client.send_message('sandbox5936258f758a44bf90dd8cb139b03838.mailgun.org', message_params).to_h!
  
end

# def send_simple_message
#   mail(to: params[:to], subject: "Welcome!").tap do |message|
#     message.mailgun_options = {
#       "tag" => ["abtest-option-a", "beta-user"],
#       "tracking-opens" => true,
#       "tracking-clicks" => "htmlonly"
#     }
#   end
# end

  # def send_simple_message
  #   RestClient.post "https://api:9be81ade51009f96467f7c280438b56b-360a0b2c-fad9516c"\
  #   "@api.mailgun.net/v3/sandbox5936258f758a44bf90dd8cb139b03838.mailgun.org/messages"
  #   from: "Excited User <mailgun@sandbox5936258f758a44bf90dd8cb139b03838.mailgun.org>"
  #   to: "csjohn@shaw.ca"
  #   subject: "Money"
  #   text: "This is the prince of Nigeria, I am giving away $10,000. Please send your SIN number and credit card number!"
  # end
  
end
