using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Loginform
{
    public partial class homepage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.login_div.Visible = false;
            this.signup_div.Visible = false;
        }

        protected void CustomValidator1_ServerValidate(object source, ServerValidateEventArgs args)
        {
            int len = args.Value.Length;
            if (len >= 8 && len <= 15)
                args.IsValid = true;
            else
                args.IsValid = false;
        }

        protected void login_Click(object sender, EventArgs e)
        {
            this.login_div.Visible = true;
            this.signup_div.Visible = false;
        }

        protected void signUp_Click(object sender, EventArgs e)
        {
            this.login_div.Visible = false;
            this.signup_div.Visible = true;
        }

        protected void Button2_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(@"Data Source=ES-SYS-763\SQL2017;Initial Catalog=Webapi;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("insert into SignUpaspx values('" + TextBox3.Text + "','" + TextBox4.Text + "','" + TextBox5.Text + "','" + TextBox6.Text + "')", con);
            cmd.ExecuteNonQuery();
            con.Close();
            Message.Text = "Inserted successfully";
            

        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            Session["Username"] = TextBox1.Text;
            Response.Redirect("~/StudentDashboard.aspx");
            SqlConnection con = new SqlConnection(@"Data Source=ES-SYS-763\SQL2017;Initial Catalog=Webapi;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("select * from SignUpaspx where Username='" + TextBox1.Text + "' and Password='" + TextBox2.Text + "'", con);
            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(cmd);
            DataTable dataTable = new DataTable();
            sqlDataAdapter.Fill(dataTable);
            int i = cmd.ExecuteNonQuery();
            if (dataTable.Rows.Count > 0)
            {
                Response.Redirect("StudentDashboard.aspx");
            }
            else
            {
                Message1.Text = "Username and Password is incorrect";
            }
            //Session["Username"] = TextBox1.Text;
            //Response.Redirect("~/StudentDashboard.aspx");
        }

        protected void Submit_Button(object sender, EventArgs e)
        {
            Response.Redirect("~/Login.aspx");
        }
    }
}