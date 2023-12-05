var flutter_script = document.createElement('script')
flutter_script.setAttribute('src', 'https://checkout.flutterwave.com/v3.js')
document.head.appendChild(flutter_script)

var remita_script = document.createElement('script')
remita_script.setAttribute('src', 'https://remitademo.net/payment/v1/remita-pay-inline.bundle.js')
document.head.appendChild(remita_script)

var flutter_script = document.createElement('script')
flutter_script.setAttribute('src', 'https://js.paystack.co/v1/inline.js')
document.head.appendChild(flutter_script)

// var html2pdff = document.createElement('script')
// html2pdff.setAttribute('src', 'https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js')
// document.head.appendChild(html2pdff)

$("#makePayment").html(`
<p class="text-2xl fontBold text-center">Make Payment</p>
<p class="text-center">Select your preferred method</p>

<div class="flex items-center flex-wrap justify-center mt-4 gap-3 px-5">

  <div class="payCards active">
    <div class="flex justify-center">
      <iconify-icon icon="mdi:credit-card-fast" class="textPrimary"></iconify-icon>
    </div>
    <p class="text-center">Online <br> Payment</p>
  </div>

  <div class="payCards">
    <div class="flex justify-center">
      <iconify-icon icon="mdi:instant-transfer" class="textPrimary"></iconify-icon>
    </div>
    <p class="text-center">Bank <br> Transfer</p>
  </div>

  <div class="payCards">
    <div class="flex justify-center">
      <iconify-icon icon="ph:bank-fill" class="textPrimary"></iconify-icon>
    </div>
    <p class="text-center">Bank <br> Branch</p>
  </div>

  <div class="payCards">
    <div class="flex justify-center">
      <iconify-icon icon="fontisto:shopping-pos-machine" class="textPrimary"></iconify-icon>
    </div>
    <p class="text-center">POS <br> &nbsp;</p>
  </div>

  <div class="payCards">
    <div class="flex justify-center">
      <iconify-icon icon="material-symbols:phone-android" class="textPrimary"></iconify-icon>
    </div>
    <p class="text-center">USSD <br> &nbsp;</p>
  </div>

  <div class="payCards">
    <div class="flex justify-center">
      <iconify-icon icon="mdi:naira" class="textPrimary"></iconify-icon>
    </div>
    <p class="text-center">e-Naira <br> &nbsp;</p>
  </div>

  <div class="payCards">
    <div class="flex justify-center">
      <iconify-icon icon="mdi:credit-card-fast" class="textPrimary"></iconify-icon>
    </div>
    <p class="text-center">ATM <br> &nbsp;</p>
  </div>

</div>

<div id="tabcontainer" class="mt-10 mb-10">

  <div class="px-20 tab_steps active">
    <p class="fontBold text-center text-lg">Follow the steps below to make online payments</p>
    <div class="flex justify-center mt-2">
      <img src="./assets/img/linebig.png" alt="">
    </div>

    <p class="text-[#555555] mt-3">You can make payment online with your ATM cards (MasterCard, Visa and
      Verve). Click on the
      <span class="fontBold text-[#000]">"Pay Now"</span> button below to proceed.
    </p>

    <div class="flex justify-center">
      <button class="button w-[60%] mt-3" onclick="makePayment()">Pay Now</button>
    </div>

  </div>

  <div class="px-20 tab_steps">
    <p class="fontBold text-center text-lg">Follow the steps below to make payments on your bank's mobile
      banking platform</p>
    <div class="flex justify-center mt-2">
      <img src="./assets/img/linebig.png" alt="">
    </div>



    
    <div class="mt-10">
      <div class="mb-4">
        <h1 class="text-xl fontBold">Step 1</h1>
        <img src="./assets/img/curveline.png" class="-mt-5" alt="">
        <p class="mt-2">log in to your bank mobile application and select transfer to bank.</p>
      </div>


      <div class="mb-4">
        <h1 class="text-xl fontBold">Step 2</h1>
        <img src="./assets/img/curveline.png" class="-mt-5" alt="">
        <p class="mt-2">Select "************" as the receiving bank and input your Invoice number *******as
          the receiving
          bank account number.</p>
      </div>

      <div class="mb-4">
        <h1 class="text-xl fontBold">Step 3</h1>
        <img src="./assets/img/curveline.png" class="-mt-5" alt="">
        <p class="mt-2">Enter the exact amount to pay in the "Amount to transfer" field that is (the system
          will pull users
          invoice
          total and display here” and proceed.</p>
      </div>

    </div>
  </div>

  <div class="px-20 tab_steps">
    <p class="fontBold text-center text-lg">Follow the steps below to make payments at a bank branch</p>
    <div class="flex justify-center mt-2">
      <img src="./assets/img/linebig.png" alt="">
    </div>

    <div class="mt-10">
      <div class="flex justify-center">
        <button class="button w-[60%] mt-3" onclick="makePaymentRemita()">Generate RRR</button>
      </div>
      
    </div>
  </div>

  <div class="px-20 tab_steps">
    <p class="fontBold text-center text-lg">Follow the steps below to make payments through POS</p>
    <div class="flex justify-center mt-2">
      <img src="./assets/img/linebig.png" alt="">
    </div>

    

    <div class="mt-10">
      <p>You can make payment at POS terminals in any of the offices of the Akwa Ibom State Board of Internal
        Revenue
        with your ATM cards (MasterCard, Visa and Verve). You will be required to present your Invoice Number
        and
        input your Pin to approve transaction.</p>
    </div>
  </div>

  <div class="px-20 tab_steps">
    <p class="fontBold text-center text-lg">Follow the steps below to make USSD payments </p>
    <div class="flex justify-center mt-2">
      <img src="./assets/img/linebig.png" alt="">
    </div>

    <div class="mt-10">
      <p>Details coming soon</p>
    </div>
  </div>

  <div class="px-20 tab_steps">
    <p class="fontBold text-center text-lg">Follow the steps below to make e-Naira payments</p>
    <div class="flex justify-center mt-2">
      <img src="./assets/img/linebig.png" alt="">
    </div>

    <div class="mt-10">
      <p>Details coming soon</p>
    </div>
  </div>

  <div class="px-20 tab_steps">
    <p class="fontBold text-center text-lg">Follow the steps below to make payment at the ATM</p>
    <div class="flex justify-center mt-2">
      <img src="./assets/img/linebig.png" alt="">
    </div>

    <div class="mt-10">
      <p>Details coming soon</p>
    </div>
  </div>


</div>
`)

let payCards = document.querySelectorAll(".payCards")
let tab_steps = document.querySelectorAll(".tab_steps")
let invoiceDetails
if (payCards) {
  payCards.forEach((payCard, i) => {
    payCard.addEventListener("click", function () {
      payCards.forEach(dd => dd.classList.remove("active"))
      tab_steps.forEach(ff => ff.classList.remove("active"))
      payCard.classList.add("active")
      tab_steps[i].classList.add("active")
    })
  })
}


function makePaymentRemita() {
  let thePay = document.querySelector("#theBal").textContent
  console.log(thePay)

  async function openInvoice(invoicenum) {
    const response = await fetch(
      // `${HOST}/php/index.php?getSingleInvoice&invoiceNumber=${invoicenum}`
      `${HOST}/php/index.php?getSingleInvoice&invoiceNumber=${invoicenum}`
    );
    const userInvoices = await response.json();
    console.log(userInvoices);

    if (userInvoices.status === 1) {
      if (userInvoices.message[0].payment_status === "paid") {
        alert("This Invoice has already been paid")
      } else {


        let invoiceDetails = userInvoices.message[0]


        var paymentEngine = RmPaymentEngine.init({
          key: 'QzAwMDAyNzEyNTl8MTEwNjE4NjF8OWZjOWYwNmMyZDk3MDRhYWM3YThiOThlNTNjZTE3ZjYxOTY5NDdmZWE1YzU3NDc0ZjE2ZDZjNTg1YWYxNWY3NWM4ZjMzNzZhNjNhZWZlOWQwNmJhNTFkMjIxYTRiMjYzZDkzNGQ3NTUxNDIxYWNlOGY4ZWEyODY3ZjlhNGUwYTY=',
          transactionId: Math.floor(Math.random() * 1101233), // Replace with a reference you generated or remove the entire field for us to auto-generate a reference for you. Note that you will be able to check the status of this transaction using this transaction Id
          customerId: invoiceDetails.email,
          firstName: invoiceDetails.first_name,
          lastName: invoiceDetails.surname,
          email: invoiceDetails.email,
          amount: parseFloat(invoiceDetails.amount_paid),
          narration: invoiceDetails.COL_4,
          onSuccess: function (response) {
            console.log('callback Successful Response', response);

            let dataToPush = {
              "endpoint": "createInvidualPayment",
              "data": {
                "invoice_number": invoicenum,
                "payment_channel": "paystack",
                "payment_reference_number": reference,
                "receipt_number": reference,
                "amount_paid": invoiceDetails.amount_paid
              }
            }
            $.ajax({
              type: "POST",
              url: HOST,
              dataType: 'json',
              data: JSON.stringify(dataToPush),
              success: function (data) {
                console.log(data)
                alert("payment success")
                nextPrev(1)
                openReceipt(invoicenum)
              },
              error: function (request, error) {
                console.log(error)
              }
            });
          },
          onError: function (response) {
            console.log('callback Error Response', response);

          },
          onClose: function () {
            console.log("closed");
          },
        });
        paymentEngine.showPaymentWidget();
        // let bbButton = document.querySelector("#js-payment-tabs > li.branch.payment-nav > a")
        // if (bbButton) {
        //   bbButton.click()
        // }

      }
    } else {
      alert("Wrong Invoice")
    }
  }
  let invoicenn = sessionStorage.getItem("invoice_number")
  openInvoice(invoicenn)


}

function makePayment() {
  let thePay = document.querySelector("#theBal")
  let finalPay = thePay.dataset.money
  console.log(finalPay)
  async function openInvoice(invoicenum) {
    const response = await fetch(
      // `${HOST}/php/index.php?getSingleInvoice&invoiceNumber=${invoicenum}`
      `${HOST}/php/index.php?getSingleInvoice&invoiceNumber=${invoicenum}`
    );
    const userInvoices = await response.json();
    console.log(userInvoices);

    if (userInvoices.status === 1) {
      if (userInvoices.message[0].payment_status === "paid") {
        alert("This Invoice has already been paid")
      } else {


        let invoiceDetails = userInvoices.message[0]

        var handler = PaystackPop.setup({
          //   key: 'pk_test_a00bd73aad869339803b75183303647b5dcd8305', // Replace with your public key
          key: 'pk_test_b9fedc4d3ccdc4c926a7cf5a112856ef45b84c2a', // Replace with your public key

          email: 'ali@gmail.com',
          amount: finalPay * 100,
          currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars

          callback: function (response) {
            //this happens after the payment is completed successfully
            var reference = response.reference;
            alert('Payment complete! Reference: ' + reference);
            // Make an AJAX call to your server with the reference to verify the transaction
            let dataToPush = {
              "endpoint": "createInvidualPayment",
              "data": {
                "invoice_number": invoicenum,
                "payment_channel": "paystack",
                "payment_reference_number": reference,
                "receipt_number": reference,
                "amount_paid": finalPay
              }
            }
            $.ajax({
              type: "POST",
              url: HOST,
              dataType: 'json',
              data: JSON.stringify(dataToPush),
              success: function (data) {
                console.log(data)
                alert("payment success")
                nextPrev(1)
                openReceipt(invoicenum)
              },
              error: function (request, error) {
                console.log(error)
              }
            });

          },
          onClose: function () {
            alert('Transaction was not completed, window closed.');
          },
        });
        handler.openIframe();

        // const modal = FlutterwaveCheckout({
        //   public_key: "FLWPUBK_TEST-b75c6102b14be3e6292bc9eca05a3497-X",
        //   tx_ref: "titanic" + Math.floor(Math.random() * 1101233),
        //   amount: parseFloat(invoiceDetails.amount_paid),
        //   currency: "NGN",
        //   payment_options: "card, banktransfer, ussd",
        //   customer: {
        //     email: invoiceDetails.email,
        //     phone_number: invoiceDetails.phone,
        //     name: invoiceDetails.first_name + " " + invoiceDetails.surname,
        //   },
        //   customizations: {
        //     title: "PlateauIGR",
        //     description: "Payment of tax",
        //     logo: "https://plateaugr.useibs.com/assets/img/logo.png",
        //   },
        //   callback: function (payment) {
        //     let dataToPush = {
        //       "endpoint": "createInvidualPayment",
        //       "data": {
        //         "invoice_number": invoicenum,
        //         "payment_channel": "FlutterWave",
        //         "payment_reference_number": payment.tx_ref,
        //         "receipt_number": payment.tx_ref, 
        //         "amount_paid" : invoiceDetails.amount_paid
        //       }
        //     }
        //     $.ajax({
        //       type: "POST",
        //       url: HOST,
        //       dataType: 'json',
        //       data: JSON.stringify(dataToPush),
        //       success: function (data) {
        //         console.log(data)
        //         alert("payment success")
        //         modal.close();
        //         nextPrev(1)
        //         openReceipt(invoicenum)
        //       },
        //       error: function (request, error) {
        //         console.log(error)
        //       }
        //     });

        //   },
        //   onclose: function (incomplete) {
        //     if (incomplete === true) {
        //       // Record event in analytics
        //       console.log("Not completed")
        //     }
        //   }
        // });

        // var handler = PaystackPop.setup({
        //   key: 'pk_test_f26de719a48fdedcf6788a6b8bba2d9bd2c3c0a4', // Replace with your public key
        //   email: invoiceDetails.email,
        //   amount: parseFloat(thePay) * 100,
        //   currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars

        //   callback: function (response) {
        //     //this happens after the payment is completed successfully
        //     var reference = response.reference;
        //     alert('Payment complete! Reference: ' + reference);
        //     // Make an AJAX call to your server with the reference to verify the transaction
        //     let dataToPush = {
        //       "endpoint": "createInvidualPayment",
        //       "data": {
        //         "invoice_number": invoicenum,
        //         "payment_channel": "paystack",
        //         "payment_reference_number": reference,
        //         "receipt_number": reference
        //       }
        //     }
        //     $.ajax({
        //       type: "POST",
        //       url: HOST,
        //       dataType: 'json',
        //       data: JSON.stringify(dataToPush),
        //       success: function (data) {
        //         console.log(data)
        //         alert("payment success")
        //         nextPrev(1)
        //         openReceipt(invoicenum)
        //       },
        //       error: function (request, error) {
        //         console.log(error)
        //       }
        //     });

        //   },
        //   onClose: function () {
        //     alert('Transaction was not completed, window closed.');
        //   },
        // });
        // handler.openIframe();
      }
    } else {
      alert("Wrong Invoice")
    }
  }
  let invoicenn = sessionStorage.getItem("invoice_number")
  openInvoice(invoicenn)


}


function formatMoney(amount) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN', // Change this to your desired currency code
    minimumFractionDigits: 2,
  });
}

async function openReceipt(invoicenum) {
  console.log(invoicenum)

  const response = await fetch(
    `${HOST}/php/index.php?getSingleInvoice&invoiceNumber=${invoicenum}`
  );
  const userInvoices = await response.json();
  console.log(userInvoices);

  if (userInvoices.status === 1) {

    userInvoices.message.forEach((invoice_info, i) => {
      // let address = ""
      // if (user_session) {
      //   address = `${user_session.lga}, ${user_session.state}, Nigeria`
      // } else {
      //   address = "Akwa Ibom, Nigeria"
      // }
      $("#receiptCard").html(`
        

        <div class="flex px-6 pt-3 items-center justify-between">
          <h1 class="fontBold text-2xl">${invoice_info.invoice_number}</h1>

          <img src="./assets/img/akwaimage.png" alt="" class="">

          <div class="flex items-center gap-1">
            <p class="text-base">Date: ${formatDate(invoice_info.date_created)}</p>
          </div>

        </div>

        <div class="flex items-center gap-x-3 flex-wrap justify-center mt-4">
          <p class="text-base flex items-center gap-1 text-[#000]"><iconify-icon icon="ic:outline-email"></iconify-icon> <span>Info@psirs.gov.ng</span></p>
          <p class="text-base flex items-center gap-1 text-[#000]"><iconify-icon icon="ic:round-phone"></iconify-icon> <span>08031230301, 07056990777</span></p>
          <p class="text-base flex items-center gap-1 text-[#000]"><iconify-icon icon="streamline:web"></iconify-icon> <span>www.plateauigr.com</span></p>
        </div>

        <p class="fontBold text-black text-2xl text-center mt-3">PLATEAU STATE GOVERNMENT</p>
        <p class="fontBold text-black text-lg text-center mt-1">INTERNAL REVENUE SERVICE</p>

        <div class="flex justify-center mt-3">
          <button class="button" type="button">PAYMENT RECEIPT</button>
        </div>

        <div class="flex justify-end -mt-20">
          <img src="./assets/img/Qr_Code.png" class="w-[150px]" alt='' />
        </div>

        <div class="flex  justify-between px-6 mt-4 mb-2">
          <div class="w-full">
            <p class="text-[#555555]">This is from : <span class="fontBold text-black">${invoice_info.COL_3}</span></p>
          </div>

          <div class="w-full flex justify-end">
           <p class="text-[#555555]">This is to : <span class="fontBold text-black capitalize">${invoice_info.surname} ${invoice_info.first_name}</span></p>
          </div>
        </div>

        <div class="border-b border-[4px] border-gray-700 mx-6"></div>

        <div class="px-6 mt-4 mb-4">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">ITEM DESCRIPTION</th>
                <th scope="col">QTY</th>
                <th scope="col">PRICE</th>
                <th scope="col">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-b border-[#6F6F84]">
                <td class="text-sm">${invoice_info.COL_4}</td>
                <td class="text-sm">01</td>
                <td class="text-sm"></td>
                <td class="text-sm">${formatMoney(parseInt(invoice_info.amount_paid))}</td>
              </tr>
              <tr>
                <td class="text-[#555555] text-sm">Sub Total</td>
                <td></td>
                <td></td>
                <td class="text-[#000] text-sm">${formatMoney(parseInt(invoice_info.amount_paid))}</td>
              </tr>
              <tr class="border-b border-b border-[#6F6F84]">
                <td class="text-[#555555] text-sm">Discount</td>
                <td></td>
                <td></td>
                <td class="text-[#000] text-sm">NGN0.00</td>
              </tr>

              <tr>
                <td colspan="3" class="text-[#000]">Grand Total<span class="text-[#555555]"> (NGN)</span></td>
                <td class="text-[#000] text-xl fontBold">${formatMoney(parseInt(invoice_info.amount_paid))}</td>
              </tr>

              <tr>
                <td colspan="4" class="text-sm text-[#000] pb-0">Amount in words</td>
              </tr>
              <tr>
                <td colspan="4" class="text-sm text-[#555555] pt-0 text-capitalize">${convertNumberToWords(invoice_info.amount_paid)} Naira Only</td>
              </tr>

             
            </tbody>  
          </table>

        </div>

        <div class="border-b border-[4px] border-gray-700 mx-6"></div>

        <div class="px-6 mt-4">

          <div class="flex justify-between">
            <div>
              <p class="mb-2 fontBold">Payer ID: ${(invoice_info.tax_number === true) ? invoice_info.tax_number : invoice_info.payer_id}</p>
              <p class="mb-2">Due Date: ${invoice_info.due_date}</p>
            </div>
            <div>
              <p class="mb-2">Invoice Date: ${invoice_info.date_created}</p>
              <p class="mb-2">Expiry Date: ${invoice_info.due_date}</p>
            </div>
          </div>
        </div>

        <div class="flex justify-end px-6 mt-4">
          <div>
            <div class="border-b border-b border-[#6F6F84] mb-2">
              <img src="./assets/img/sign.png" alt="" class="pb-2">
            </div>
          
            <h4 class="fontBold">Jim Pam Wayas</h4>
            <h4 class="fontBold">Executive Chairman PSIRS</h4>
          </div>
        </div>

        <div class="px-6 mb-6">
          <img src="./assets/img/logo11.png" width="100" alt="" />
        </div>

        <div class="invoicetop"></div>
      </div>
    `)

    })

    $("#editBtn").on("click", function () {
      editoo();
    });
  } else {
    $("#invoiceCard").html(`Invalid Invoice, or expired invoice`)
  }
}

let urlParams22 = new URLSearchParams(window.location.search);
const load2 = urlParams22.get('load')
const invoicenumber2 = urlParams22.get('invnumber')

if (load2) {
  openReceipt(invoicenumber2)
}


function downloadInvoice(thecard) {
  const element = document.getElementById(thecard);
  var originalContent = document.body.innerHTML

  var HTML_Width = $("#" + thecard).width();
  var HTML_Height = $("#" + thecard).height();
  var top_left_margin = 15;
  var PDF_Width = HTML_Width + (top_left_margin * 2);
  var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;

  var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

  html2canvas($("#" + thecard)[0]).then(function (canvas) {
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
    for (var i = 1; i <= totalPDFPages; i++) {
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
    }
    pdf.save(thecard + ".pdf");
    document.body.innerHTML = originalContent;
    // $("#" + thecard).hide();
  });

}

function printInvoice(thecard) {
  var originalContent = document.body.innerHTML;
  var printContent = document.getElementById(thecard).innerHTML;


  document.body.innerHTML = printContent;
  window.print();
  document.body.innerHTML = originalContent;

}


function generateRandomString() {
  const timestamp = new Date().getTime().toString(); // Get current timestamp as a string
  const randomNum = Math.random().toString(36).substr(2, 8); // Generate a random alphanumeric string
  const randomString = timestamp + randomNum; // Combine timestamp and random string
  return randomString;
}

function convertNumberToWords(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (number === 0) {
    return 'zero';
  }

  if (number < 0) {
    return 'minus ' + convertNumberToWords(Math.abs(number));
  }

  let words = '';

  if (Math.floor(number / 1000000) > 0) {
    words += convertNumberToWords(Math.floor(number / 1000000)) + ' million ';
    number %= 1000000;
  }

  if (Math.floor(number / 1000) > 0) {
    words += convertNumberToWords(Math.floor(number / 1000)) + ' thousand ';
    number %= 1000;
  }

  if (Math.floor(number / 100) > 0) {
    words += convertNumberToWords(Math.floor(number / 100)) + ' hundred ';
    number %= 100;
  }

  if (number > 0) {
    if (words !== '') {
      words += 'and ';
    }

    if (number < 10) {
      words += ones[number];
    } else if (number < 20) {
      words += teens[number - 11];
    } else {
      words += tens[Math.floor(number / 10)];
      if (number % 10 > 0) {
        words += '-' + ones[number % 10];
      }
    }
  }

  return words.trim();

}


function formatDate(inputDate) {
  // Parse the input date string
  const parsedDate = new Date(inputDate.replace(/-/g, '/'));

  // Options for formatting the date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  // Format the date using the options
  const formattedDate = parsedDate.toLocaleDateString('en-US', options);

  // Extract the day and add the appropriate suffix
  const dayWithSuffix = addSuffix(parsedDate.getDate());

  // Construct the final formatted date string
  const finalFormattedDate = `${formattedDate}`;

  return finalFormattedDate;
}

// Function to add suffix to day
function addSuffix(day) {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}