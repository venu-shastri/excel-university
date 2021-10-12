<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="StudentDashboard.aspx.cs" Inherits="Loginform.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        .auto-style1 {
            margin-left: 178px;
            margin-top: 103px;
        }
        .auto-style2 {
            text-align: center;
        }
        .auto-style3 {
            font-size: medium;
            margin-left: 165px;
        }
        .auto-style4 {
            font-size: medium;
            margin-left: 62px;
            margin-top: 0px;
        }
        .auto-style5 {
            font-size: medium;
            margin-left: 48px;
        }
        </style>
</head>
<body style="height: 282px">
    <form id="form1" runat="server">
        <asp:Label ID="LabelUser" runat="server" Font-Bold="True" Font-Italic="True" Font-Size="XX-Large"></asp:Label>
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <asp:HyperLink ID="HyperLink1" NavigateUrl="StudentLoan.aspx" runat="server" BackColor="White" Font-Bold="True" Font-Size="X-Large" ForeColor="Black">StudentLoanCalculator</asp:HyperLink>
        
       <asp:Button ID="Button1" runat="server" CssClass="auto-style1" Height="31px" Text="Logout" Width="110px" OnClick="Button1_Click" OnClientClick="javascript:return confirm('Are you sure you want to log out?');" BackColor="#339933" Font-Bold="True" Font-Size="Large" ForeColor="White"/> <br /><br /><br />
        <div class="auto-style2">
        </div>
        <div>
            <asp:Button ID="Button5" runat="server" BackColor="#99CCFF" CssClass="auto-style3" Height="48px" Text="ASP.NET" Width="226px" />
        <asp:Button ID="Button6" runat="server" BackColor="#99CCFF" CssClass="auto-style4" Height="48px" Text="CSharp" Width="226px" />
        <asp:Button ID="Button7" runat="server" BackColor="#99CCFF" CssClass="auto-style5" Height="48px" Text="Java" Width="226px" />
        </div>
        <br/>
        <div>
        <asp:Button ID="Button2" runat="server" BackColor="#99CCFF" CssClass="auto-style3" Height="48px" Text="Python" Width="226px" />
        <asp:Button ID="Button3" runat="server" BackColor="#99CCFF" CssClass="auto-style4" Height="48px" Text="Angular" Width="226px" />
        <asp:Button ID="Button4" runat="server" BackColor="#99CCFF" CssClass="auto-style5" Height="48px" Text="MVC" Width="226px" />
        </div>
        <br />
         <div>
        <asp:Button ID="Button8" runat="server" BackColor="#99CCFF" CssClass="auto-style3" Height="48px" Text="Bootstrap" Width="226px" />
        <asp:Button ID="Button9" runat="server" BackColor="#99CCFF" CssClass="auto-style4" Height="48px" Text="Jquery" Width="226px" />
        <asp:Button ID="Button10" runat="server" BackColor="#99CCFF" CssClass="auto-style5" Height="48px" Text="Pascal" Width="226px" />
        </div>

    </form>
    

</body>
</html>

