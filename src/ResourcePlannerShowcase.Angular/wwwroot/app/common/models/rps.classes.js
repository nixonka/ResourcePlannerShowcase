"use strict";
var Enums_1 = require('./Enums');
//import { InitializationService } from '../services/initialization.service';
var Projects = (function () {
    function Projects() {
    }
    return Projects;
}());
exports.Projects = Projects;
var Team = (function () {
    function Team() {
        this.employees = [];
    }
    return Team;
}());
exports.Team = Team;
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;
var MonthlyUtilization = (function () {
    function MonthlyUtilization() {
    }
    return MonthlyUtilization;
}());
exports.MonthlyUtilization = MonthlyUtilization;
var ContentModel = (function () {
    function ContentModel() {
        this.id = "";
        this.name = "";
        this.description = "";
        this.status = Enums_1.ContentModelStatus.Draft;
        this.contentFields = [];
    }
    return ContentModel;
}());
exports.ContentModel = ContentModel;
var ContentField = (function () {
    function ContentField() {
    }
    return ContentField;
}());
exports.ContentField = ContentField;
var StringFieldType = (function () {
    function StringFieldType() {
        this.type = "string";
        this.length = 255;
        this.icon = "";
        this.descriptions = ["Sortable", "Maximum 255 characters. Use for titles, names, tags, URLs, e-mail addresses."];
    }
    return StringFieldType;
}());
exports.StringFieldType = StringFieldType;
var TextFieldType = (function () {
    function TextFieldType() {
        this.type = "text";
        this.length = -1;
        this.icon = "";
        this.descriptions = ["Unsortable", "Maximum 50k characters. Use for descriptions, text paragraphs, articles."];
    }
    return TextFieldType;
}());
exports.TextFieldType = TextFieldType;
var NumberFieldType = (function () {
    function NumberFieldType() {
        this.type = "number";
        this.length = -1;
        this.icon = "";
        this.descriptions = ["Integer", "1, 2, 3, 5, 8, 13, …"];
    }
    return NumberFieldType;
}());
exports.NumberFieldType = NumberFieldType;
var DecimalFieldType = (function () {
    function DecimalFieldType() {
        this.type = "decimal";
        this.length = -1;
        this.icon = "";
        this.descriptions = ["Decimal", "3.14"];
    }
    return DecimalFieldType;
}());
exports.DecimalFieldType = DecimalFieldType;
var FieldType = (function () {
    function FieldType() {
    }
    return FieldType;
}());
exports.FieldType = FieldType;
var Content = (function () {
    function Content() {
    }
    return Content;
}());
exports.Content = Content;
//# sourceMappingURL=rps.classes.js.map