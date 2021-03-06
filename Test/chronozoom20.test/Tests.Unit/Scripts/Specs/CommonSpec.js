﻿/// <reference path="../Utils/jquery-1.7.2.min.js" />
/// <reference path="../Js/common.js" />
/// <reference path="../Js/cz.settings.js" />


//describe("loadDataUrl() method", function () {
//    describe("should return", function () {
//        it("'Chronozoom.svc/get' if datasource = 'db'", function () {
//            czDataSource = 'db';
//            var url = loadDataUrl();
//            expect(url).toEqual("Chronozoom.svc/get");
//        });

//        it("'ChronozoomRelay' if datasource = 'relay'", function () {
//            czDataSource = 'relay';
//            var url = loadDataUrl();
//            expect(url).toEqual("ChronozoomRelay");
//        });

//        it("'ResponseDump.txt' if datasource = 'dump'", function () {
//            czDataSource = 'dump';
//            var url = loadDataUrl();
//            expect(url).toEqual("oldResponseDump.txt");
//        });

//        it("null if datasource = empty string", function () {
//            czDataSource = '';
//            var url = loadDataUrl();
//            expect(url).toEqual(null);
//        });

//        it("null if datasource = random string", function () {
//            czDataSource = 'random string';
//            var url = loadDataUrl();
//            expect(url).toEqual(null);
//        });

//        it("unescaped string if 'window.location.hash' contain '#dataurl='", function () {
//            czDataSource = 'random string';
//            window.location.hash = "#dataurl=responsedump.txt/t655/";
//            var url = loadDataUrl();
//            expect(url).toEqual('responsedump.txt');
//        });
//    });
//});

describe("getCookie() method", function () {
    describe("should return", function () {
        var common;
        beforeEach(function () {
            common = CZ.Common;
        });
        it("unescaped cookie value, if c_name = Cookie1", function () {
            var c_name = "Cookie1";
            document.cookie = "Cookie1=Value1;Cookie2=Value2";
            expect("Value1").toEqual(common.getCookie(c_name));
        });

        it("unescaped cookie value, if c_name = string in ASCII", function () {
            var c_name = "Cookie1";
            document.cookie = "Cookie1=%56%61%6C%75%65%31;Cookie2=Value2";
            expect("Value1").toEqual(common.getCookie(c_name));
        });

        it("null, if c_name = empty string", function () {
            var c_name = "";
            document.cookie = "Cookie1=Value1;Cookie2=Value2";
            expect(null).toEqual(common.getCookie(c_name));
        });

        it("null, if Cookie1 not have value", function () {
            var c_name = "Cookie1";
            document.cookie = "Cookie1=;Cookie2=Value2";
            expect('').toEqual(common.getCookie(c_name));
        });

        it("null, if c_name not fount in cookies", function () {
            var c_name = "CustomCookie";
            document.cookie = "Cookie1=;Cookie2=Value2";
            expect(null).toEqual(common.getCookie(c_name));
        });

        it("null, if cookies are empty", function () {
            var c_name = "Cookie1";
            document.cookie = "";
            expect('').toEqual(common.getCookie(c_name));
        });

        it("null, if Cookie1 name = empty string", function () {
            var c_name = "Cookie1";
            document.cookie = "=Value1;Cookie2=Value2";
            expect('').toEqual(common.getCookie(c_name));
        });

        it("first value, if Cookie1 is duplicated", function () {
            var c_name = "Cookie1";
            document.cookie = "Cookie1=Value1_0;Cookie1=Value1_1;Cookie2=Value2";
            expect("Value1_0").toEqual(common.getCookie(c_name));
        });
    });
});
