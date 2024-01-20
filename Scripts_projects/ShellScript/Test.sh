

#echo What is your name ?
#read name
#echo what is your age
#read age
#
#echo Your name is $name and age is $age

#
#if [ $name = "mahi" ]; then
#    echo "boss"
#elif [ $name = "help" ]; then
#    echo "from help"
#else
#    echo "nothing"
#fi

#
#list=("one" "two" "three" "four")
#echo "${list[@]}"
#
#for item in "${list[@]}" ; do
#  echo  "Number  = " $item ";" -n;
#done
#
#for i in {1..5}; do
#    echo "Iteration $i"
#done
#
#result=$(curl -X GET --header "Accept: */*" "https://jsonplaceholder.typicode.com/todos")
#
#echo "Response from server:"
#echo "$result"
#
#exit 0



## Set the URL of your application
#app_url="https://mahendhar-personal-blog-zeta-bice.vercel.app/"
#
## Make a GET request to the application and capture the HTTP status code
#http_status=$(curl -s -o /dev/null -w "%{http_code}" "$app_url")
#
#echo "HTTP Status Code: $http_status"
#
## Check if the HTTP status code indicates a successful response (2xx range)
#if [[ $http_status -ge 200 && $http_status -lt 300 ]]; then
#    echo "Application is working."
#else
#    echo "Application is not working."
#fi
#
#exit 0


#
## Set the URL of your application
#app_url="https://deliver.bmg.com/monitor"
#
## Make a GET request to the application and capture the HTTP status code
#response=$(curl -s -o /dev/null -w "HTTP Status Code: %{http_code}\nResponse: %{response_code}" "$app_url")
#
## Extract HTTP status code from the response
#http_status=$(echo "$response" | awk '/HTTP Status Code:/ {print $4}')
#
## Check if the HTTP status code indicates success (2xx range)
#if [ $http_status -ge 200 ] && [ $http_status -lt 300 ]; then
#    echo "Application is working (HTTP Status Code: $http_status)"
#else
#    echo "Application is not working (HTTP Status Code: $http_status)"
#fi
#
## Print the full response for further analysis
#echo -e "\nFull Response:\n$response"
#
#exit 0



# Set the URL of your application
#app_url="https://mahendhar-personal-blog-zeta-bice.vercel.app/"



#app_url="https://deliver.bmg.com/monitor"
#recipient_email="padmamahendhar96@gmail.com"
#mail_subject="Application Status Alert"
#
## Function to send email
#send_email() {
#    local body=$1
#    local subject=$2
#    local recipient=$3
#
#    powershell.exe -Command "Send-MailMessage -SmtpServer smtp.gmail.com -Port 587 -UseSsl -Credential (Get-Credential) -From 'mahendhar96522@gmail.com' -To '$recipient' -Subject '$subject' -Body '$body' -BodyAsHtml"
#}
#
## Health check function
#check_application_status() {
#    local response=$(curl -s -o /dev/null -w "%{http_code}" "$app_url")
#    if [ $response -ne 200 ]; then
#        local error_message="Application is down! HTTP Status Code: $response"
#        send_email "$error_message" "$mail_subject" "$recipient_email"
#    else
#        echo "Application is running smoothly (HTTP Status Code: $response)"
#    fi
#}
#
## Main function
#main() {
#    check_application_status
#}
#
## Execute the main function
#main


to="padmamahendhar96@gmail.com"
subject="Hello"
body="Email Test"

echo "$body" | mailx -s "$subject" $to
