import WebView from "react-native-webview";

const HTML = `
<html>
  <head>
    <title>Advancly Widget</title>
    <style>
      body {
        margin: 0;
      }
      .advancly {
        border: none;
        height: 100%;
        width: 100%;
      }
  
    
    </style>
  </head>
  <body style="height: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center;"
  >
    <!-- You can style this button however you want -->
    <button type="button" onClick="openWidget()" id="advancly-button" 
    style="height: 6rem; 
    font-size: 3rem; 
    background-color: #713fff; 
    color: #fff; 
    border-radius: 10px; 
    border: 0
    padding: 2rem;
    "
    >
      REQUEST LOAN
    </button>

    <script>
      const msgToPost = {
        aggregator_id: 29, // Test ID for Paelyt

        bank_account_number: "0701963637",

        bank_code: "044",

        borrower_phone: "02023451239",

        // bvn_number: "22167382780",

        bvn_number: "22294565409", // new user bvn

        // bvn_number: "22247846872",

        aggregator_loan_ref: Date.now().toString(),

        cac_number: "2913380",

        city: "Mubunto",

        company_name: "CBIA",

        customer_type: "1", // 1 is individual, 2 is corporate

        email: "martin@yopmail.com",

        first_name: "Martin",

        gender: "male",

        last_name: "Davidson",

        photo_url: null,

        // public_key: "AYAyAToX8gZQKJwX", // For Paelyt on test1

        // public_key: "x2w99PjBj8bi2reK", // For Paelyt on test2

        public_key: "wNNyUkkPqiNxXpp8", // For Paelyt on master test

        // public_key: "owULLMKdjT5QF3tw", // For Paelyt on Master staging

        residence_address: "80 Bola Street Ebute Merin",

        state: "Lagos",

        amount: 5560, // Loan Amount

        product_id: 71, // Id of Loan Product

        product_code: "PA-204", // Code of Loan Product

        tenure: 30, // Loan Tenure in days

        rc_number: "0002345",

        customer_category: "car borrower",
        // onboarding_only: true, //Set if user just want to onboard
        customStyles: {
          buttonBackgroundColor: "#377dff", // Can be string or the color code
          buttonTextColor: "#fff", // Can be string or the color code
          acceptButtonBackgroundColor: "#377dff", // Can be string or the color code
          acceptButtonTextColor: "#fff", // Can be string or the color code
          declineButtonBackgroundColor: "#377dff", // Can be string or the color code
          declineButtonTextColor: "#fff", // Can bes string or the color code
          dropdownTextColor: "#000", // Can be string or the color code
          dropdownBackgroundColor: "#fff", // Can be string or the color code
        },
      };

        function widgetUrl(){
        return "http://localhost:3000/create-loan-account"
        }

      function openWidget() {
        document.getElementById("advancly-button").style.display = "none";
        let iframe = document.createElement("iframe");
        iframe.setAttribute("class", "advancly");
        iframe.src = widgetUrl();
        document.body.appendChild(iframe);

        function closeWidget() {
          iframe.remove();
        }

        // Listen to response from the widget
        window.addEventListener("message", function (e) {
          if (e.data.status === "success") {
            // closeWidget(); // Closing the iframe on success response
            console.log(e.data); // Log response from the widget
          }
          if (e.data.status === "cancel") {
            document.getElementById("advancly-button").style.display = "block";
            closeWidget();
          }
        });

        iframe.onload = function () {
          iframe.contentWindow.postMessage(msgToPost, widgetUrl());
        };
      }

      window.openWidget = openWidget;
    </script>
  </body>
</html>
`;

export default function App() {
  return <WebView source={{ html: HTML }} style={{ marginTop: 40 }} />;
}
