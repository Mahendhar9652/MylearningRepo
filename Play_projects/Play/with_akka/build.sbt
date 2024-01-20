name := """with_akka"""
organization := "akka"

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.13.12"

libraryDependencies += "com.typesafe.akka" %% "akka-actor" % "2.6.20"
libraryDependencies += "com.typesafe.akka" %% "akka-testkit" % "2.6.20" % "test"

