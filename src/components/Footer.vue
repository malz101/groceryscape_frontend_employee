<template>
    <div class="section footer">
        <div class="footer-grid">
            <div class="grid-column">
                <h5>Contact Us</h5>
                <p><i class="material-icons tiny">call</i><a>+876123456789</a></p>
                <p><i class="material-icons tiny">email</i><a>groceryscape@gmail.com</a></p>
                <p><i class="material-icons tiny">language</i><a>www.groceryscape.com</a></p>
            </div>
            <div class="grid-column">
                <h5>Top Parishes</h5>
                <p> <a> St. Andrew </a> </p>
                <p> <a> St. Catherine </a> </p>
                <p> <a> St.James </a> </p>
            </div>
            <div class="grid-column">
                <h5>Catergories</h5>
                <p> <a> Vegetables </a> </p>
                <p> <a> Staples </a> </p>
                <p> <a> Meat and Poultry </a> </p>
            </div>
            <div class="grid-column">
                <h5>About Us</h5>
                <p> <a> Company Information </a> </p>
                <p> <a> Store Location </a> </p>
                <p> <a> Copyright </a> </p>
            </div>  
        </div>
        <h6 class="copyright">
            Copyright &copy; 2021. All Rights Reserved
        </h6>
    </div>
</template>

<style lang="scss" scoped>

.footer{
  background: rgb(226, 226, 226);
  .footer-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .grid-column{
      margin: 16px;
      h5{
        font-size: 16px;
        margin-bottom: 24px;
      }
      p{
        font-size: 12px;
        display: flex;
        align-items: center;
        i{
          padding-right: 4px;
        }
      }
    }

    a{
      cursor: pointer;
      color: #00242c;
    }
    a:hover{
      text-decoration: underline;
    }
  }

  .copyright{
    text-align: center;
    font-size: 10px;
  }
}

</style>