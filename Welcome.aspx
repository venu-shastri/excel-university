<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Welcome.aspx.cs" Inherits="Loginform.Welcome" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="Registration.css" rel="stylesheet" />

</head>
<body>
    <form id="form1" runat="server">
        
             <div class="image">
                  <asp:Image ID="Image1" ImageUrl="ExcelLogo.jpg" runat="server" Width="500px"/>
             </div>

              <div class="Hyperlink">
                <h1>Excel University</h1>
                <asp:HyperLink ID="HyperLink1" runat="server" NavigateUrl="~/homepage.aspx">Click Here</asp:HyperLink>
                
              </div>
        
    </form>
</body>
</html>
