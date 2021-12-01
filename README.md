Basically loader and user card contains display:flex in the style. While hide class contains display:none style.

-> When someone click on the button "Get Data" then the function named get_user_data() will be called and this function will add the hide class in user cards and will remove the hide class from loader. So the the user will be able to see the loader. 

-> After sometime this function will call another function named showData(). Now this function will add hide class in loader and will remove the hide class from user cards. So, the user will be able to see the hide cards.

-> If again the user clicks on the "Get Data" button then it will first show the loader and user cards after the loader.

This design is fully responsive too.
