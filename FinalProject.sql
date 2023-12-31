USE [master]
GO
/****** Object:  Database [Project]    Script Date: 12/29/2022 10:19:58 AM ******/
CREATE DATABASE [Project]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Project', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Project.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Project_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\Project_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [Project] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Project].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Project] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Project] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Project] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Project] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Project] SET ARITHABORT OFF 
GO
ALTER DATABASE [Project] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Project] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Project] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Project] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Project] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Project] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Project] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Project] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Project] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Project] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Project] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Project] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Project] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Project] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Project] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Project] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Project] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Project] SET RECOVERY FULL 
GO
ALTER DATABASE [Project] SET  MULTI_USER 
GO
ALTER DATABASE [Project] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Project] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Project] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Project] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Project] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Project] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Project', N'ON'
GO
ALTER DATABASE [Project] SET QUERY_STORE = OFF
GO
USE [Project]
GO
/****** Object:  User [Project]    Script Date: 12/29/2022 10:19:58 AM ******/
CREATE USER [Project] WITHOUT LOGIN WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_owner] ADD MEMBER [Project]
GO
/****** Object:  Table [dbo].[admin_]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[admin_](
	[Username] [nvarchar](25) NULL,
	[Pass] [nvarchar](20) NULL,
	[TD_ID] [int] NULL,
	[Admin_ID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__admin___4A3001172754FA38] PRIMARY KEY CLUSTERED 
(
	[Admin_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[assigment_in_course]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[assigment_in_course](
	[Course_ID] [nvarchar](30) NOT NULL,
	[RoundNo] [int] NOT NULL,
	[A_ID] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[Course_ID] ASC,
	[RoundNo] ASC,
	[A_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[assignment]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[assignment](
	[A_date] [date] NULL,
	[Deadline] [date] NULL,
	[Description_] [nvarchar](50) NULL,
	[A_ID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__assignme__71AC6D419CBCBB27] PRIMARY KEY CLUSTERED 
(
	[A_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[attendance]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[attendance](
	[C_ID] [nvarchar](30) NOT NULL,
	[RoundNo] [int] NOT NULL,
	[T_ID] [int] NOT NULL,
	[A_date] [date] NOT NULL,
 CONSTRAINT [PK__attendan__ADA66C700676FB81] PRIMARY KEY CLUSTERED 
(
	[C_ID] ASC,
	[RoundNo] ASC,
	[T_ID] ASC,
	[A_date] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[course_]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[course_](
	[Course_ID] [nvarchar](30) NOT NULL,
	[C_Name] [nvarchar](100) NULL,
	[C_Brief] [nvarchar](100) NULL,
 CONSTRAINT [PK__course___37E005FBA4CC5F17] PRIMARY KEY CLUSTERED 
(
	[Course_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[course_plan]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[course_plan](
	[C_ID] [nvarchar](30) NOT NULL,
	[RoundNo] [int] NOT NULL,
	[TD_ID] [int] NOT NULL,
	[StartDate] [date] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[C_ID] ASC,
	[RoundNo] ASC,
	[TD_ID] ASC,
	[StartDate] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[course_round]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[course_round](
	[Course_ID] [nvarchar](30) NOT NULL,
	[RoundNo] [int] NOT NULL,
	[StartDate] [date] NULL,
	[EndDate] [date] NULL,
	[Targ] [nvarchar](25) NULL,
	[Instructor_ID] [int] NULL,
	[Content] [nvarchar](100) NULL,
 CONSTRAINT [PK__course_r__7EAD869929505A13] PRIMARY KEY CLUSTERED 
(
	[Course_ID] ASC,
	[RoundNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[course_round_room]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[course_round_room](
	[room_ID] [int] NOT NULL,
	[C_ID] [nvarchar](30) NOT NULL,
	[round_No] [int] NOT NULL,
	[resDate] [date] NOT NULL,
	[starttime] [time](7) NULL,
	[endtime] [time](7) NULL,
PRIMARY KEY CLUSTERED 
(
	[room_ID] ASC,
	[C_ID] ASC,
	[round_No] ASC,
	[resDate] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[enrolled_in]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[enrolled_in](
	[Trainee_ID] [int] NOT NULL,
	[Course_ID] [nvarchar](30) NOT NULL,
	[RoundNo] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Trainee_ID] ASC,
	[Course_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[feedback]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[feedback](
	[F_date] [date] NULL,
	[T_ID] [int] NULL,
	[feedback_txt] [nvarchar](100) NULL,
	[F_ID] [int] IDENTITY(1,1) NOT NULL,
	[C_ID] [nvarchar](30) NULL,
	[Round_No] [int] NULL,
 CONSTRAINT [PK__feedback__2C6EC7C37FD1363D] PRIMARY KEY CLUSTERED 
(
	[F_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[instructor]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[instructor](
	[Username] [nvarchar](25) NULL,
	[Pass] [nvarchar](20) NULL,
	[Inst_Name] [nvarchar](25) NULL,
	[Instructor_ID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__instruct__DD4B9A8A5261F861] PRIMARY KEY CLUSTERED 
(
	[Instructor_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[quiz]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[quiz](
	[Quiz_date] [datetime] NULL,
	[C_ID] [nvarchar](30) NULL,
	[RoundNo] [int] NULL,
	[Topics_] [nvarchar](50) NULL,
	[Quiz_ID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__quiz__10974D4A55B7B1E0] PRIMARY KEY CLUSTERED 
(
	[Quiz_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[report]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[report](
	[C_ID] [nvarchar](30) NOT NULL,
	[RoundNo] [int] NOT NULL,
	[T_ID] [int] NOT NULL,
	[R_date] [date] NOT NULL,
 CONSTRAINT [PK_report] PRIMARY KEY CLUSTERED 
(
	[C_ID] ASC,
	[RoundNo] ASC,
	[T_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[rooms]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[rooms](
	[Capacity] [int] NULL,
	[room_id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__rooms__19EE6A7335763296] PRIMARY KEY CLUSTERED 
(
	[room_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[submit_assignment]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[submit_assignment](
	[T_ID] [int] NOT NULL,
	[A_ID] [int] NOT NULL,
	[Grade] [int] NULL,
	[submitionLink] [nvarchar](100) NOT NULL,
	[C_ID] [nvarchar](30) NOT NULL,
 CONSTRAINT [PK_submit_assignment] PRIMARY KEY CLUSTERED 
(
	[T_ID] ASC,
	[A_ID] ASC,
	[C_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[trainee]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[trainee](
	[Username] [nvarchar](25) NULL,
	[Email] [nvarchar](30) NULL,
	[PhoneNo] [nvarchar](11) NULL,
	[Pass] [nvarchar](20) NULL,
	[Jobgroup] [nvarchar](25) NULL,
	[Job] [nvarchar](25) NULL,
	[ArName] [nvarchar](25) NULL,
	[EnName] [nvarchar](25) NULL,
	[Comp_ID] [int] NULL,
	[trainee_id] [int] IDENTITY(1,1) NOT NULL,
	[gender] [nvarchar](30) NULL,
 CONSTRAINT [PK__trainee__E2F3082A21DF8861] PRIMARY KEY CLUSTERED 
(
	[trainee_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[trainee_company]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[trainee_company](
	[TC_Name] [nvarchar](50) NULL,
	[Department] [nvarchar](50) NULL,
	[Director] [nvarchar](50) NULL,
	[Sector] [nvarchar](50) NULL,
	[Area] [nvarchar](50) NULL,
	[Phone] [nvarchar](11) NULL,
	[Fax] [nvarchar](50) NULL,
	[tc_id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__trainee___2A3483DE0F87E31D] PRIMARY KEY CLUSTERED 
(
	[tc_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[trainee_quiz]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[trainee_quiz](
	[Trainee_ID] [int] NOT NULL,
	[Quiz_ID] [int] NOT NULL,
	[Grade] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[Trainee_ID] ASC,
	[Quiz_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[training_department]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[training_department](
	[TD_Name] [nvarchar](50) NULL,
	[MG_name] [nvarchar](50) NULL,
	[Phone_No] [nvarchar](11) NULL,
	[td_id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK__training__B2EE46BB0401E543] PRIMARY KEY CLUSTERED 
(
	[td_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[yearlyplan]    Script Date: 12/29/2022 10:19:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[yearlyplan](
	[TD_ID] [int] NOT NULL,
	[Startdate] [date] NOT NULL,
	[End_date] [date] NULL,
 CONSTRAINT [PK_yearlyplan] PRIMARY KEY CLUSTERED 
(
	[TD_ID] ASC,
	[Startdate] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[admin_] ON 

INSERT [dbo].[admin_] ([Username], [Pass], [TD_ID], [Admin_ID]) VALUES (N'daniel', N'd123', 1, 1)
INSERT [dbo].[admin_] ([Username], [Pass], [TD_ID], [Admin_ID]) VALUES (N'fatma', N'f123', 2, 2)
INSERT [dbo].[admin_] ([Username], [Pass], [TD_ID], [Admin_ID]) VALUES (N'nour', N'n123', 3, 3)
SET IDENTITY_INSERT [dbo].[admin_] OFF
GO
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olf-2', 3, 33)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olf-5', 2, 30)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-1', 1, 1)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-1', 1, 2)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-1', 2, 1)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-1', 2, 2)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-10', 1, 3)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-10', 1, 17)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-10', 2, 1)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-3', 2, 1)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-3', 2, 2)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-9', 2, 31)
INSERT [dbo].[assigment_in_course] ([Course_ID], [RoundNo], [A_ID]) VALUES (N'olm-9', 2, 32)
GO
SET IDENTITY_INSERT [dbo].[assignment] ON 

INSERT [dbo].[assignment] ([A_date], [Deadline], [Description_], [A_ID]) VALUES (CAST(N'2022-06-22' AS Date), CAST(N'2022-06-25' AS Date), N'وصف التكليف الاول', 1)
INSERT [dbo].[assignment] ([A_date], [Deadline], [Description_], [A_ID]) VALUES (CAST(N'2022-07-20' AS Date), CAST(N'2022-07-28' AS Date), N'وصف التكليف التاني', 2)
INSERT [dbo].[assignment] ([A_date], [Deadline], [Description_], [A_ID]) VALUES (CAST(N'2022-09-22' AS Date), CAST(N'2022-09-27' AS Date), N'وصف التكليف الثالث', 3)
INSERT [dbo].[assignment] ([A_date], [Deadline], [Description_], [A_ID]) VALUES (CAST(N'2020-02-02' AS Date), CAST(N'2020-03-02' AS Date), N'وصف التكليف الرابع', 17)
INSERT [dbo].[assignment] ([A_date], [Deadline], [Description_], [A_ID]) VALUES (CAST(N'2023-07-02' AS Date), CAST(N'2023-07-05' AS Date), N'وصف التكليف الخامس', 30)
INSERT [dbo].[assignment] ([A_date], [Deadline], [Description_], [A_ID]) VALUES (CAST(N'2022-10-10' AS Date), CAST(N'2022-10-15' AS Date), N'وصف التكليف السادس', 31)
INSERT [dbo].[assignment] ([A_date], [Deadline], [Description_], [A_ID]) VALUES (CAST(N'2022-10-20' AS Date), CAST(N'2022-10-30' AS Date), N'وصف التكليف السابع', 32)
INSERT [dbo].[assignment] ([A_date], [Deadline], [Description_], [A_ID]) VALUES (CAST(N'2022-10-01' AS Date), CAST(N'2022-10-15' AS Date), N'وصف التكليف الثامن', 33)
SET IDENTITY_INSERT [dbo].[assignment] OFF
GO
INSERT [dbo].[attendance] ([C_ID], [RoundNo], [T_ID], [A_date]) VALUES (N'olm-3', 2, 2, CAST(N'2020-07-30' AS Date))
GO
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olf-2', N'شرح اللائحة المالية', N'محتويات اللائحة(صرف-تحصيل-اعداد موازنات)')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olf-4', N'التحليل المالي للميزانيات', N'عرض الميزانية و تحليلها -عرض المؤشرات الماليه و كيفية حسابها')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olf-5', N'عرض القوائم المالية ', N'أنواع القوائم المالية -طرق عرض القوائم المالية-تطبيق القوائم المالية بالشركة')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olf-6', N'المخاطر المالية في الشركات ', N'مخاطر العملة و السيولة و الإئتمان-مخاطر تشغيلية -مخاطر تغلب الاسعار')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olf-7', N'إستخدام التحليل المالي في تقييم الاداء ', N'اساليب التحليل المالي-النسب و المؤشرات المالية')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olm-1', N'شرح قانون التأمينات الاجتماعية الجديد', N'لحقوق التأمينية الأساسية والإضافية/تعويض إصابة العمل- منحة الوفاة/استحقاقات المصاب لمعاش إضافي')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olm-10', N'مهارات التحفيز', N'انواع الاحتياجات الفردية /خصائص المحفز الجيد/إسلوب التحفيز و التفويض')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olm-3', N'شرح لائحة نظام العاملين', N'شرح بنود الائحة')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olm-6', N'إدارة الوقت و التفويض و تحديد الاولويات', N'طرق التحكم في الوقت \تنظيم العمل ')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olm-7', N'فن التعامل مع ضغوط العمل و طرق حل المشكلات و اتخاذ القرار ', N'طرق و اساليب حل المشكلات \تقسيم المشكلات \تعريف الضغوط-أساليب الضغوط')
INSERT [dbo].[course_] ([Course_ID], [C_Name], [C_Brief]) VALUES (N'olm-9', N'التحول الرقمي ', N'اهمية التحول الرقمي- تعريف التحول الرقمي-طريقة التطبيق')
GO
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-2', 1, 2, CAST(N'2020-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-2', 2, 2, CAST(N'2023-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-4', 1, 2, CAST(N'2023-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-5', 1, 2, CAST(N'2023-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-5', 2, 2, CAST(N'2024-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-6', 1, 2, CAST(N'2024-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-6', 2, 2, CAST(N'2026-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-7', 1, 2, CAST(N'2024-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olf-7', 2, 2, CAST(N'2026-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olm-1', 1, 1, CAST(N'2022-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olm-1', 2, 1, CAST(N'2024-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olm-3', 2, 2, CAST(N'2020-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olm-6', 1, 1, CAST(N'2023-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olm-7', 1, 1, CAST(N'2023-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olm-7', 2, 3, CAST(N'2025-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olm-9', 2, 1, CAST(N'2022-01-01' AS Date))
INSERT [dbo].[course_plan] ([C_ID], [RoundNo], [TD_ID], [StartDate]) VALUES (N'olm-9', 3, 1, CAST(N'2023-01-01' AS Date))
GO
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-2', 1, CAST(N'2022-09-08' AS Date), CAST(N'2022-11-09' AS Date), N'مالي', 1, N'https://www.')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-2', 2, CAST(N'2022-11-10' AS Date), CAST(N'2022-12-31' AS Date), N'مالي', 20, N'https://')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-2', 3, CAST(N'2022-10-10' AS Date), CAST(N'2023-12-01' AS Date), N'مالي', 3, N'اhttps;//')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-4', 1, CAST(N'2021-03-05' AS Date), CAST(N'2021-06-05' AS Date), N'مالي', 15, N'https://www.')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-5', 1, CAST(N'2021-02-11' AS Date), CAST(N'2021-03-11' AS Date), N'مالي', 17, N'https://www.facebook.com')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-5', 2, CAST(N'2023-07-01' AS Date), CAST(N'2023-08-01' AS Date), N'جميع الفئات', 10, NULL)
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-6', 1, CAST(N'2022-07-01' AS Date), CAST(N'2022-09-01' AS Date), N'مالي', 21, N'https://www.youtube.com')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-6', 2, CAST(N'2023-09-01' AS Date), CAST(N'2023-10-10' AS Date), N'جميع الفئات', 15, NULL)
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-7', 1, CAST(N'2022-09-01' AS Date), CAST(N'2022-10-01' AS Date), N'مالي', 17, N'https://')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olf-7', 2, CAST(N'2024-01-01' AS Date), CAST(N'2024-04-01' AS Date), N'جميع الفئات', 18, N'https://www')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-1', 1, CAST(N'2022-06-06' AS Date), CAST(N'2023-06-06' AS Date), N'إشرافية', 1, N'')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-1', 2, CAST(N'2022-10-12' AS Date), CAST(N'2022-12-01' AS Date), N'إشرافية', 1, NULL)
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-10', 1, CAST(N'2020-01-08' AS Date), CAST(N'2020-09-20' AS Date), N'إشرافية', 2, N'https://drive.google.com/drive/u/2/folders/1vriiFydZc0TPZDiy6mPbiwfUa9do59NK')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-10', 2, CAST(N'2021-09-02' AS Date), CAST(N'2021-10-06' AS Date), N'إشرافية', 2, N'linkkkkkkk')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-3', 2, CAST(N'2021-09-02' AS Date), CAST(N'2021-10-06' AS Date), N'إشرافية', 3, N'https://drive.google.com/drive/u/2/folders/1vriiFydZc0TPZDiy6mPbiwfUa9do59NK')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-6', 1, CAST(N'2021-08-05' AS Date), CAST(N'2021-09-05' AS Date), N'ادارة عليا-ادارة وسطي', 1, N'https://www.drive.com')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-7', 1, CAST(N'2021-09-02' AS Date), CAST(N'2021-11-10' AS Date), N'جميع الفئات', 2, NULL)
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-7', 2, CAST(N'2023-11-10' AS Date), CAST(N'2023-12-10' AS Date), N'جميع الفئات', 2, N'https://www')
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-9', 2, CAST(N'2022-09-08' AS Date), CAST(N'2022-11-08' AS Date), N'جميع الفئات', 3, NULL)
INSERT [dbo].[course_round] ([Course_ID], [RoundNo], [StartDate], [EndDate], [Targ], [Instructor_ID], [Content]) VALUES (N'olm-9', 3, CAST(N'2023-10-10' AS Date), CAST(N'2023-12-01' AS Date), N'جميع الفئات', 19, N'https://www')
GO
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (1, N'olm-1', 2, CAST(N'2022-12-15' AS Date), CAST(N'12:20:00' AS Time), CAST(N'15:20:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (2, N'olm-1', 2, CAST(N'2022-12-16' AS Date), CAST(N'12:20:00' AS Time), CAST(N'15:20:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (2, N'olm-3', 2, CAST(N'2022-12-15' AS Date), CAST(N'15:30:00' AS Time), CAST(N'16:50:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (3, N'olm-3', 2, CAST(N'2022-12-16' AS Date), CAST(N'12:20:00' AS Time), CAST(N'15:20:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (4, N'olm-6', 1, CAST(N'2022-12-16' AS Date), CAST(N'01:00:00' AS Time), CAST(N'02:00:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (5, N'olf-2', 1, CAST(N'2021-01-09' AS Date), CAST(N'12:00:00' AS Time), CAST(N'01:00:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (6, N'olf-2', 2, CAST(N'2023-01-15' AS Date), CAST(N'01:22:00' AS Time), CAST(N'02:30:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (7, N'olf-4', 1, CAST(N'2023-05-01' AS Date), CAST(N'03:00:00' AS Time), CAST(N'04:00:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (8, N'olf-5', 1, CAST(N'2021-03-01' AS Date), CAST(N'12:00:00' AS Time), CAST(N'01:00:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (9, N'olf-6', 1, CAST(N'2022-08-01' AS Date), CAST(N'10:00:00' AS Time), CAST(N'11:00:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (10, N'olf-6', 2, CAST(N'2023-09-15' AS Date), CAST(N'09:00:00' AS Time), CAST(N'10:00:00' AS Time))
INSERT [dbo].[course_round_room] ([room_ID], [C_ID], [round_No], [resDate], [starttime], [endtime]) VALUES (11, N'olf-5', 2, CAST(N'2023-07-05' AS Date), CAST(N'10:00:00' AS Time), CAST(N'12:00:00' AS Time))
GO
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (1, N'olm-1', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (1, N'olm-10', 1)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (2, N'olm-1', 1)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (2, N'olm-3', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (3, N'olf-2', 1)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (3, N'olm-1', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (4, N'olf-4', 1)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (5, N'olf-2', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (6, N'olf-2', 3)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (7, N'olf-5', 1)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (7, N'olm-1', 1)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (8, N'olf-5', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (8, N'olm-10', 1)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (9, N'olf-6', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (9, N'olf-7', 1)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (10, N'olf-5', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (11, N'olm-10', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (12, N'olf-7', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (13, N'olf-6', 2)
INSERT [dbo].[enrolled_in] ([Trainee_ID], [Course_ID], [RoundNo]) VALUES (15, N'olf-4', 1)
GO
SET IDENTITY_INSERT [dbo].[feedback] ON 

INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2022-02-07' AS Date), 8, N'يوجد بعض التعليقات ', 2, N'olm-10', 1)
INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2022-02-07' AS Date), 8, N'الكورس رائع', 8, N'olm-10', 1)
INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2022-12-27' AS Date), 2, N'مدهش', 16, N'olm-3', 2)
INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2022-12-27' AS Date), 5, N'الكورس رائع', 17, N'olf-2', 2)
INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2022-12-27' AS Date), 3, N'المدرب مدهش', 21, N'olf-2', 1)
INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2022-12-29' AS Date), 7, N'جميل ماشاء الله', 22, N'olf-5', 1)
INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2022-12-31' AS Date), 10, N'مدهش', 23, N'olf-5', 2)
INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2023-01-09' AS Date), 13, N'جميل ماشاء الله', 24, N'olf-6', 2)
INSERT [dbo].[feedback] ([F_date], [T_ID], [feedback_txt], [F_ID], [C_ID], [Round_No]) VALUES (CAST(N'2023-01-12' AS Date), 9, N'يوجد بعض التعليقات ', 25, N'olf-6', 2)
SET IDENTITY_INSERT [dbo].[feedback] OFF
GO
SET IDENTITY_INSERT [dbo].[instructor] ON 

INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'ledia', N'l123', N'ليديا وحيد', 1)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'ali', N'a123', N'على الصديق', 2)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'marwa', N'm123', N'مروة محمود', 3)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'rawan', N'r123', N'روان مصطفى', 10)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'fatma', N'f123', N'فاطمة', 11)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'ahmed ', N'ah123', N'احمد', 12)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'khaled', N'k123', N'خالد', 13)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'abdelrahman', N'ab123', N'عبدالرحمن', 14)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'maha', N'm123', N'مها', 15)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'eman', N'e123', N'ايمان', 16)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'azza', N'az123', N'عزة', 17)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'howaida ', N'h123', N'هوايدا', 18)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'nabil', N'n123', N'نبيل', 19)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'ebrahim', N'e123', N'ابراهيم', 20)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'omar', N'o123', N'عمر', 21)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'mostafa', N'm123', N'مصطفي', 22)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'hesham', N'h123', N'هشام', 23)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'mahmoud', N'm123', N'محمود', 24)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'amr', N'am123', N'عمرو', 25)
INSERT [dbo].[instructor] ([Username], [Pass], [Inst_Name], [Instructor_ID]) VALUES (N'karem', N'k123', N'كريم', 26)
SET IDENTITY_INSERT [dbo].[instructor] OFF
GO
SET IDENTITY_INSERT [dbo].[quiz] ON 

INSERT [dbo].[quiz] ([Quiz_date], [C_ID], [RoundNo], [Topics_], [Quiz_ID]) VALUES (CAST(N'2023-08-08T00:00:00.000' AS DateTime), N'olm-3', 2, N'اخر محاضرة', 2)
INSERT [dbo].[quiz] ([Quiz_date], [C_ID], [RoundNo], [Topics_], [Quiz_ID]) VALUES (CAST(N'2022-09-08T00:00:00.000' AS DateTime), N'olm-10', 1, N'المنهج كامل', 3)
INSERT [dbo].[quiz] ([Quiz_date], [C_ID], [RoundNo], [Topics_], [Quiz_ID]) VALUES (CAST(N'2022-12-16T00:00:00.000' AS DateTime), N'olm-1', 2, N'Graphs', 4)
INSERT [dbo].[quiz] ([Quiz_date], [C_ID], [RoundNo], [Topics_], [Quiz_ID]) VALUES (CAST(N'2022-12-16T00:00:00.000' AS DateTime), N'olm-1', 2, N'Graphs', 5)
INSERT [dbo].[quiz] ([Quiz_date], [C_ID], [RoundNo], [Topics_], [Quiz_ID]) VALUES (CAST(N'2022-10-10T00:00:00.000' AS DateTime), N'olf-2', 1, N'اول محاضرة', 6)
INSERT [dbo].[quiz] ([Quiz_date], [C_ID], [RoundNo], [Topics_], [Quiz_ID]) VALUES (CAST(N'2021-04-04T03:02:00.000' AS DateTime), N'olf-4', 1, N'المنهج كامل', 7)
INSERT [dbo].[quiz] ([Quiz_date], [C_ID], [RoundNo], [Topics_], [Quiz_ID]) VALUES (CAST(N'2021-03-03T00:00:00.000' AS DateTime), N'olf-5', 1, N'محاضر الخامسة', 8)
INSERT [dbo].[quiz] ([Quiz_date], [C_ID], [RoundNo], [Topics_], [Quiz_ID]) VALUES (CAST(N'2023-07-02T00:00:00.000' AS DateTime), N'olf-5', 2, N'اخر محاضرة', 9)
SET IDENTITY_INSERT [dbo].[quiz] OFF
GO
INSERT [dbo].[report] ([C_ID], [RoundNo], [T_ID], [R_date]) VALUES (N'olf-2', 2, 5, CAST(N'2023-01-01' AS Date))
INSERT [dbo].[report] ([C_ID], [RoundNo], [T_ID], [R_date]) VALUES (N'olf-4', 1, 4, CAST(N'2022-01-01' AS Date))
INSERT [dbo].[report] ([C_ID], [RoundNo], [T_ID], [R_date]) VALUES (N'olm-1', 1, 2, CAST(N'2023-07-01' AS Date))
INSERT [dbo].[report] ([C_ID], [RoundNo], [T_ID], [R_date]) VALUES (N'olm-1', 2, 1, CAST(N'2023-01-01' AS Date))
INSERT [dbo].[report] ([C_ID], [RoundNo], [T_ID], [R_date]) VALUES (N'olm-10', 1, 1, CAST(N'2022-10-01' AS Date))
INSERT [dbo].[report] ([C_ID], [RoundNo], [T_ID], [R_date]) VALUES (N'olm-3', 2, 1, CAST(N'2022-07-08' AS Date))
INSERT [dbo].[report] ([C_ID], [RoundNo], [T_ID], [R_date]) VALUES (N'olm-3', 2, 2, CAST(N'2022-05-07' AS Date))
GO
SET IDENTITY_INSERT [dbo].[rooms] ON 

INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (20, 1)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (30, 2)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (10, 3)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (30, 4)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (50, 5)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (60, 6)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (20, 7)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (30, 8)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (60, 9)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (20, 10)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (10, 11)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (70, 12)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (20, 13)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (90, 14)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (30, 15)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (30, 16)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (40, 17)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (50, 18)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (60, 19)
INSERT [dbo].[rooms] ([Capacity], [room_id]) VALUES (60, 20)
SET IDENTITY_INSERT [dbo].[rooms] OFF
GO
INSERT [dbo].[submit_assignment] ([T_ID], [A_ID], [Grade], [submitionLink], [C_ID]) VALUES (1, 1, 5, N'https/www.asssigment1/trainee1', N'olm-1')
INSERT [dbo].[submit_assignment] ([T_ID], [A_ID], [Grade], [submitionLink], [C_ID]) VALUES (1, 2, 85, N'https://www.google.com/', N'olm-1')
INSERT [dbo].[submit_assignment] ([T_ID], [A_ID], [Grade], [submitionLink], [C_ID]) VALUES (1, 3, 3, N'https://www.google.com/', N'olm-10')
INSERT [dbo].[submit_assignment] ([T_ID], [A_ID], [Grade], [submitionLink], [C_ID]) VALUES (2, 1, 8, N'https/:www.assigment2/student1', N'olm-1')
INSERT [dbo].[submit_assignment] ([T_ID], [A_ID], [Grade], [submitionLink], [C_ID]) VALUES (2, 2, 7, N'https/:www.assigment2/student1', N'olm-1')
GO
SET IDENTITY_INSERT [dbo].[trainee] ON 

INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee1', N'trainee1@gmail.com', N'018', N'trainee123', N'طبي', N'مهندس', N'متدرب أ', N'trainee1', 1, 1, N'ذكر')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee2', N'trainee2@gmail.com', N'015', N'trainee234', N'هندسي', N'مهندس', N'متدرب ب', N'trainee2', 1, 2, N'انثى')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee3', N'tr@gmail.com', N'010', N'trainee345', N'طبي', N'مهندس', N'متدرب ج', N'trainee3', 1, 3, N'ذكر')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee4', N'trainee4@gmail.com', N'02193872', N'trainee456', N'فني', N'محاسب', N'متدرب ه', N'trainee4', 2, 4, N'انثى')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee5', N'trainee5@gmail', N'02761288', N'trainee567', N'فني', N'محاسب', N'متدرب 5', N'trainee5', 4, 5, N'ذكر')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee6', N'trainee6@gmail', N'0198729', N'trainee678', N'هندسي', N'مهندس', N'متدرب 6', N'trainee6', 5, 6, N'انثى')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee7', N'trainee7@gmail.com', N'01287638', N'trainee789', N'فني', N'مدير', N'متدرب7', N'trainee7', 3, 7, N'انثى')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee8', N'trainee8@...', N'0289732', N'trainee8910', N'مالي', N'محاسب', N'متدرب8', N'trainee8', 2, 8, N'انثى')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee9', N'trainee9', N'012979', N'trainee91011', N'كيميائي', N'مدير', N'متدرب9', N'trainee9', 1, 9, N'ذكر')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee10', N'trainee10', N'0299827', N'trainee101112', N'هندسي', N'محاسب', N'متدرب10', N'trainee10', 3, 10, N'انثى')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee11', N'trainee11', N'0128912', N'trainee111213', N'كتابي', N'مدير', N'متدرب11', N'trainee11', 2, 11, N'ذكر')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee12', N'trainee12', N'01298192', N'trainee121314', N'فني', N'مهندس', N'متدرب12', N'trainee12', 5, 12, N'انثى')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee13', N'trainee13', N'0181737', N'trainee131415', N'مالي', N'مهندس', N'متدرب13', N'trainee13', 1, 13, N'انثى')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee14', N'trainee14', N'01282763', N'trainee141516', N'مالي', N'محاسب', N'متدرب14', N'trainee14', 2, 14, N'ذكر')
INSERT [dbo].[trainee] ([Username], [Email], [PhoneNo], [Pass], [Jobgroup], [Job], [ArName], [EnName], [Comp_ID], [trainee_id], [gender]) VALUES (N'trainee15', N'trainee15', N'010187322', N'trainee151617', N'طبي', N'محاسب', N'متدرب15', N'trainee15', 4, 15, N'ذكر')
SET IDENTITY_INSERT [dbo].[trainee] OFF
GO
SET IDENTITY_INSERT [dbo].[trainee_company] ON 

INSERT [dbo].[trainee_company] ([TC_Name], [Department], [Director], [Sector], [Area], [Phone], [Fax], [tc_id]) VALUES (N'شركة 1', N'الادارة 1', N'نبيل خليل', N'قطاع أ', N'الدلتا', N'01226209200', N'44444444', 1)
INSERT [dbo].[trainee_company] ([TC_Name], [Department], [Director], [Sector], [Area], [Phone], [Fax], [tc_id]) VALUES (N'شركة 2', N'الادارة 2', N'ابراهيم', N'قطاع ب', N'ديوان', N'01283192338', N'178262', 2)
INSERT [dbo].[trainee_company] ([TC_Name], [Department], [Director], [Sector], [Area], [Phone], [Fax], [tc_id]) VALUES (N'شركة 3', N'الادارة 3', N'احمد محمود', N'قطاع ج', N'مصر العليا', N'01238197423', N'37489', 3)
INSERT [dbo].[trainee_company] ([TC_Name], [Department], [Director], [Sector], [Area], [Phone], [Fax], [tc_id]) VALUES (N'شركة 4', N'الادارة 4', N'فكري', N'قطاع د', N'القاهرة', N'01234354345', N'14324', 4)
INSERT [dbo].[trainee_company] ([TC_Name], [Department], [Director], [Sector], [Area], [Phone], [Fax], [tc_id]) VALUES (N'شركة 5', N'الادارة 5', N'محمد', N'قطاع ه', N'اسكندرية', N'01032764332', N'38727', 5)
SET IDENTITY_INSERT [dbo].[trainee_company] OFF
GO
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (1, 2, 10)
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (1, 4, NULL)
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (2, 2, 6)
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (3, 5, NULL)
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (3, 6, NULL)
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (4, 7, NULL)
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (7, 8, 6)
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (8, 3, 8)
INSERT [dbo].[trainee_quiz] ([Trainee_ID], [Quiz_ID], [Grade]) VALUES (8, 9, NULL)
GO
SET IDENTITY_INSERT [dbo].[training_department] ON 

INSERT [dbo].[training_department] ([TD_Name], [MG_name], [Phone_No], [td_id]) VALUES (N'مركز التدريب المالي و الاداري', N'نجلاء يحيي حسنين', N'24267719', 1)
INSERT [dbo].[training_department] ([TD_Name], [MG_name], [Phone_No], [td_id]) VALUES (N'مركز التدريب الحاسب', N'صباح معوض بسطا', N'2256', 2)
INSERT [dbo].[training_department] ([TD_Name], [MG_name], [Phone_No], [td_id]) VALUES (N'مركز تدريب اللغات', N'انعام محمد ', N'26778656', 3)
SET IDENTITY_INSERT [dbo].[training_department] OFF
GO
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (1, CAST(N'2022-01-01' AS Date), CAST(N'2023-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (1, CAST(N'2023-01-01' AS Date), CAST(N'2024-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (1, CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (1, CAST(N'2026-01-01' AS Date), CAST(N'2027-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (1, CAST(N'2027-01-01' AS Date), CAST(N'2028-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (1, CAST(N'2028-01-01' AS Date), CAST(N'2029-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (2, CAST(N'2020-01-01' AS Date), CAST(N'2021-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (2, CAST(N'2023-01-01' AS Date), CAST(N'2024-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (2, CAST(N'2024-01-01' AS Date), CAST(N'2025-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (2, CAST(N'2026-01-01' AS Date), CAST(N'2027-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (2, CAST(N'2027-01-01' AS Date), CAST(N'2028-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (2, CAST(N'2028-01-01' AS Date), CAST(N'2029-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (3, CAST(N'2022-01-01' AS Date), CAST(N'2023-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (3, CAST(N'2023-01-01' AS Date), CAST(N'2024-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (3, CAST(N'2025-01-01' AS Date), CAST(N'2026-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (3, CAST(N'2026-01-01' AS Date), CAST(N'2027-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (3, CAST(N'2027-01-01' AS Date), CAST(N'2028-01-01' AS Date))
INSERT [dbo].[yearlyplan] ([TD_ID], [Startdate], [End_date]) VALUES (3, CAST(N'2028-01-01' AS Date), CAST(N'2029-01-01' AS Date))
GO
ALTER TABLE [dbo].[admin_]  WITH CHECK ADD  CONSTRAINT [FK_admin__training_department] FOREIGN KEY([TD_ID])
REFERENCES [dbo].[training_department] ([td_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[admin_] CHECK CONSTRAINT [FK_admin__training_department]
GO
ALTER TABLE [dbo].[assigment_in_course]  WITH CHECK ADD FOREIGN KEY([A_ID])
REFERENCES [dbo].[assignment] ([A_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[assigment_in_course]  WITH CHECK ADD FOREIGN KEY([Course_ID], [RoundNo])
REFERENCES [dbo].[course_round] ([Course_ID], [RoundNo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[attendance]  WITH CHECK ADD  CONSTRAINT [FK__attendance__46E78A0C] FOREIGN KEY([C_ID], [RoundNo])
REFERENCES [dbo].[course_round] ([Course_ID], [RoundNo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[attendance] CHECK CONSTRAINT [FK__attendance__46E78A0C]
GO
ALTER TABLE [dbo].[attendance]  WITH CHECK ADD  CONSTRAINT [FK_attendance_trainee] FOREIGN KEY([T_ID])
REFERENCES [dbo].[trainee] ([trainee_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[attendance] CHECK CONSTRAINT [FK_attendance_trainee]
GO
ALTER TABLE [dbo].[course_plan]  WITH CHECK ADD  CONSTRAINT [FK__course_plan__48CFD27E] FOREIGN KEY([C_ID], [RoundNo])
REFERENCES [dbo].[course_round] ([Course_ID], [RoundNo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[course_plan] CHECK CONSTRAINT [FK__course_plan__48CFD27E]
GO
ALTER TABLE [dbo].[course_plan]  WITH CHECK ADD FOREIGN KEY([TD_ID], [StartDate])
REFERENCES [dbo].[yearlyplan] ([TD_ID], [Startdate])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[course_round]  WITH CHECK ADD  CONSTRAINT [FK__course_ro__Cours__35BCFE0A] FOREIGN KEY([Course_ID])
REFERENCES [dbo].[course_] ([Course_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[course_round] CHECK CONSTRAINT [FK__course_ro__Cours__35BCFE0A]
GO
ALTER TABLE [dbo].[course_round]  WITH CHECK ADD  CONSTRAINT [FK_course_round_instructor] FOREIGN KEY([Instructor_ID])
REFERENCES [dbo].[instructor] ([Instructor_ID])
ON UPDATE CASCADE
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[course_round] CHECK CONSTRAINT [FK_course_round_instructor]
GO
ALTER TABLE [dbo].[course_round_room]  WITH CHECK ADD FOREIGN KEY([room_ID])
REFERENCES [dbo].[rooms] ([room_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[course_round_room]  WITH CHECK ADD FOREIGN KEY([C_ID], [round_No])
REFERENCES [dbo].[course_round] ([Course_ID], [RoundNo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[enrolled_in]  WITH CHECK ADD  CONSTRAINT [FK__enrolled_in__4D94879B] FOREIGN KEY([Course_ID], [RoundNo])
REFERENCES [dbo].[course_round] ([Course_ID], [RoundNo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[enrolled_in] CHECK CONSTRAINT [FK__enrolled_in__4D94879B]
GO
ALTER TABLE [dbo].[enrolled_in]  WITH CHECK ADD  CONSTRAINT [FK_enrolled_in_trainee] FOREIGN KEY([Trainee_ID])
REFERENCES [dbo].[trainee] ([trainee_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[enrolled_in] CHECK CONSTRAINT [FK_enrolled_in_trainee]
GO
ALTER TABLE [dbo].[feedback]  WITH CHECK ADD  CONSTRAINT [FK_feedback_course_round] FOREIGN KEY([C_ID], [Round_No])
REFERENCES [dbo].[course_round] ([Course_ID], [RoundNo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[feedback] CHECK CONSTRAINT [FK_feedback_course_round]
GO
ALTER TABLE [dbo].[quiz]  WITH CHECK ADD  CONSTRAINT [FK__quiz__4F7CD00D] FOREIGN KEY([C_ID], [RoundNo])
REFERENCES [dbo].[course_round] ([Course_ID], [RoundNo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[quiz] CHECK CONSTRAINT [FK__quiz__4F7CD00D]
GO
ALTER TABLE [dbo].[report]  WITH CHECK ADD  CONSTRAINT [FK__report__412EB0B6] FOREIGN KEY([C_ID], [RoundNo])
REFERENCES [dbo].[course_round] ([Course_ID], [RoundNo])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[report] CHECK CONSTRAINT [FK__report__412EB0B6]
GO
ALTER TABLE [dbo].[report]  WITH CHECK ADD  CONSTRAINT [FK_report_trainee] FOREIGN KEY([T_ID])
REFERENCES [dbo].[trainee] ([trainee_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[report] CHECK CONSTRAINT [FK_report_trainee]
GO
ALTER TABLE [dbo].[submit_assignment]  WITH CHECK ADD  CONSTRAINT [FK_submit_assignment_assignment] FOREIGN KEY([A_ID])
REFERENCES [dbo].[assignment] ([A_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[submit_assignment] CHECK CONSTRAINT [FK_submit_assignment_assignment]
GO
ALTER TABLE [dbo].[submit_assignment]  WITH CHECK ADD  CONSTRAINT [FK_submit_assignment_course_] FOREIGN KEY([C_ID])
REFERENCES [dbo].[course_] ([Course_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[submit_assignment] CHECK CONSTRAINT [FK_submit_assignment_course_]
GO
ALTER TABLE [dbo].[submit_assignment]  WITH CHECK ADD  CONSTRAINT [FK_submit_assignment_trainee] FOREIGN KEY([T_ID])
REFERENCES [dbo].[trainee] ([trainee_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[submit_assignment] CHECK CONSTRAINT [FK_submit_assignment_trainee]
GO
ALTER TABLE [dbo].[trainee]  WITH CHECK ADD  CONSTRAINT [FK_trainee_trainee_company] FOREIGN KEY([Comp_ID])
REFERENCES [dbo].[trainee_company] ([tc_id])
ON UPDATE CASCADE
ON DELETE SET NULL
GO
ALTER TABLE [dbo].[trainee] CHECK CONSTRAINT [FK_trainee_trainee_company]
GO
ALTER TABLE [dbo].[trainee_quiz]  WITH CHECK ADD  CONSTRAINT [FK_trainee_quiz_quiz] FOREIGN KEY([Quiz_ID])
REFERENCES [dbo].[quiz] ([Quiz_ID])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[trainee_quiz] CHECK CONSTRAINT [FK_trainee_quiz_quiz]
GO
ALTER TABLE [dbo].[trainee_quiz]  WITH CHECK ADD  CONSTRAINT [FK_trainee_quiz_trainee] FOREIGN KEY([Trainee_ID])
REFERENCES [dbo].[trainee] ([trainee_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[trainee_quiz] CHECK CONSTRAINT [FK_trainee_quiz_trainee]
GO
ALTER TABLE [dbo].[yearlyplan]  WITH CHECK ADD  CONSTRAINT [FK_yearlyplan_training_department] FOREIGN KEY([TD_ID])
REFERENCES [dbo].[training_department] ([td_id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[yearlyplan] CHECK CONSTRAINT [FK_yearlyplan_training_department]
GO
USE [master]
GO
ALTER DATABASE [Project] SET  READ_WRITE 
GO
