package io.zilker.application.servlet;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import io.zilker.application.delegate.UserDelegate;
import io.zilker.application.logsession.UserSession;

/**
 * Servlet implementation class Login
 */
@WebServlet("/Login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * Default constructor.
	 */
	public Login() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		UserDelegate userDelegate = new UserDelegate();
		UserSession userSession = userDelegate.userLogin(request.getParameter("username"),
				request.getParameter("password"));

		if (userSession.getUSER_ID() != 0 && userSession.getUserRoll().equals("USER")) {
			HttpSession session = request.getSession();
			session.setAttribute("userSession", userSession);
			response.sendRedirect("pages/user-profile.jsp");
		} else if (userSession.getUSER_ID() != 0 && userSession.getUserRoll().equals("CONTRACTOR")) {
			HttpSession session = request.getSession();
			session.setAttribute("userSession", userSession);
			response.sendRedirect("pages/contractor-profile.jsp");
		} else if (userSession.getUSER_ID() != 0 && userSession.getUserRoll().equals("ADMIN")) {
			HttpSession session = request.getSession();
			session.setAttribute("userSession", userSession);
			response.sendRedirect("pages/admin.jsp");
		} else {
			String message = "Invalid Username or Password";
			response.sendRedirect("index.jsp?message=" + URLEncoder.encode(message, "UTF-8"));
		}

		doGet(request, response);
	}

}
