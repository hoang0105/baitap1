package pxu.edu.vn.bai3;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class bai1
 */
@WebServlet("/bai1")
public class bai1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public bai1() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		String docType =
				"<!doctype html public \"-//w3c//dtd html 4.0 "+
						"transitional//en\">\n";
				out.println( docType + "<html>\n" +
				"<head> <title>" + "baitap1" + "</title></head>\n" +
				"<body bgcolor=\"#f0f0f0\">\n" +
				"<h1 align=\"center\">" + "bai1" + "</h1>\n" +
				"<ul>\n" +
				"<li><b>First Name</b>: "
				+ request.getParameter("usernamef") + "\n" +
				"<li><b>Hidden</b>: "
				+ request.getParameter("hiddenf") + "\n" +
				"<li><b>Checkbox</b>: "
				+ request.getParameter ("checkboxf") + "\n" +
				"<li><b>Listbox</b>: "
				+ request.getParameter("list_box") + "\n" +
				"<li><b>Radio</b>: "
				+ request.getParameter("radiof") + "\n" +
				"</ul>\n" +
				"</body></html>");

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
