﻿using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests
{
    [TestClass]
    public class SearchTests : TestBase
    {
        public TestContext TestContext { get; set; }

        #region Initialize and Cleanup

        [ClassInitialize]
        public static void ClassInitialize(TestContext testContext)
        {

        }

        [TestInitialize]
        public void TestInitialize()
        {
            BrowserStateManager.RefreshState();
            HomePageHelper.OpenPage();
            WelcomeScreenHelper.CloseWelcomePopup();
            SearchHelper.InitSearchWindow();
        }

        [ClassCleanup]
        public static void ClassCleanup()
        {
        }

        [TestCleanup]
        public void TestCleanup()
        {
        }

        #endregion

        [TestMethod]
        public void Search_Mayan_History_Timeline()
        {
            SearchHelper.SearchMayanHistoryTimeline();
            Assert.AreEqual("Mayan History", HomePageHelper.GetLastBreadcrumbs());
        }  
        
        [TestMethod]
        public void Search_Evidence_Earliest_Stone_Tools_Exhibit()
        {
            SearchHelper.SearchEvidenceEarliestStoneToolsExhibit();
            Assert.AreEqual("Genus Homo", HomePageHelper.GetLastBreadcrumbs());
        }  
        
        [TestMethod]
        public void Search_Take_Our_Survey_Artifact()
        {
            //https://github.com/alterm4nn/ChronoZoom/issues/355
            SearchHelper.Search_Take_Our_Survey_Artifact();
            StringAssert.Contains(ExhibitHelper.GetContentItemDescription(), "Your responses to these 12 questions will help us prioritize the next set");
        }
    }
}